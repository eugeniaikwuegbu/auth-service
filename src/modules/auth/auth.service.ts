import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { NotificationService } from 'src/notifications/notifications.service';
import { UtilityService } from 'src/utils/utils';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/repositories/user.repository';
import { UsersService } from '../users/users.service';
import { ForgotPasswordDTO } from './dtos/forgotPassword-dto';
import { ResetPasswordDTO } from './dtos/reset-password.dto';
import { VerifyOTP } from './dtos/verify-email.dto';
import { GoogleUserPayload } from './interface/google-user-payload';
import { TokenPayload } from './interface/token-payload.interface';

@Injectable()
export class AuthService {
  protected readonly logger = new Logger(AuthService.name);
  private jwtSecret;
  private jwtExpiration;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly utilService: UtilityService,
    private readonly userService: UsersService,
    private readonly userRepository: UserRepository,
    private readonly notificationService: NotificationService,
  ) {
    this.jwtSecret = configService.get('JWT_SECRET');
    this.jwtExpiration = configService.get('JWT_EXPIRATION');
  }

  async registerUser(data: CreateUserDTO) {
    data.password = await this.utilService.hashPassword(data.password);
    const user = await this.userService.createUser(data);

    const OTP = this.utilService.generateOTP(6);

    const tokenPayload: TokenPayload = {
      id: user?._id.toHexString(),
      email: user?.email,
      OTP,
    };

    const OTPToken = await this.utilService.generateToken(
      tokenPayload,
      '10m',
      this.jwtSecret,
    );

    const verificationLink = this.getVerificationLink(
      OTP,
      OTPToken,
      user?.email,
    );

    console.log(OTP);

    await this.notificationService.sendVerificationEmail(
      user?.email,
      `${user?.firstName} ${user?.lastName}`,
      verificationLink,
    );

    return { user, OTPToken };
  }

  async resendVerification(email: string) {
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }

    if (user?.isEmailVerified) {
      throw new HttpException(
        'Account already verified',
        HttpStatus.BAD_REQUEST,
      );
    }

    const OTP = this.utilService.generateOTP(6);
    const OTPToken = await this.utilService.generateToken(
      { id: user._id, OTP, email },
      '10m',
      this.jwtSecret,
    );

    const verificationLink = this.getVerificationLink(
      OTP,
      OTPToken,
      user?.email,
    );

    await this.notificationService.sendVerificationEmail(
      user?.email,
      user?.getFullName(),
      verificationLink,
    );
  }

  async verifyAccount(payload: VerifyOTP) {
    const data = await this.utilService
      .verifyToken(payload.OTPToken, this.configService.get('JWT_SECRET'))
      .catch((err) => {
        throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
      });

    console.info('verifyAccount data \n %o', data);

    if (!data) throw new UnauthorizedException('Invalid Token');

    if (payload.email !== data.email)
      throw new HttpException('Invalid User', HttpStatus.BAD_REQUEST);

    if (data?.OTP?.toString() !== payload.OTPCode?.toString())
      throw new HttpException('Incorrect Otp Code', HttpStatus.BAD_REQUEST);

    const user = await this.userService.getUser({ _id: data?.id });

    if (user?.isEmailVerified) {
      throw new HttpException(
        'Account already verified',
        HttpStatus.BAD_REQUEST,
      );
    }

    const updatedUser = await this.userService.updateUser(user?._id, {
      isEmailVerified: true,
    } as UpdateUserDto);

    await this.notificationService.sendWelcomeEmail(
      user?.email,
      user?.getFullName(),
    );
    return updatedUser;
  }

  async login(user: User, response: Response) {
    if (!user.isEmailVerified) {
      throw new HttpException(
        'Please verify your account',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const tokenPayload: TokenPayload = {
      id: user?._id.toHexString(),
    };

    const token = this.generateJwtToken(tokenPayload);
    this.setJwtToCookie(token, response);

    return { user, token };
  }

  async refreshToken(userId: string) {
    const user = await this.userService.getUser({ _id: userId });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const tokenPayload: TokenPayload = {
      id: userId,
    };

    const token = this.jwtService.sign(tokenPayload);

    return { user, token };
  }

  async forgotPassword(payload: ForgotPasswordDTO) {
    const user = await this.userService.getUser({ email: payload?.email });

    if (!user) return;

    let passwordResetUrl;
    if (user) {
      const token = await this.utilService.generateToken(
        { email: payload.email, id: user._id },
        '10m',
        this.jwtSecret,
      );
      passwordResetUrl = this.getPasswordResetUrl(token);
    }

    await this.notificationService.sendForgotPasswordEmail(
      user?.email,
      user?.getFullName(),
      passwordResetUrl,
    );
  }

  async resetPassword(payload: ResetPasswordDTO) {
    const data = await this.utilService
      .verifyToken(payload.codeToken, this.configService.get('JWT_SECRET'))
      .catch((err) => {
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
      });

    if (!data) {
      throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userService.getUser({ _id: data.id });

    if (!user) throw new HttpException('Invalid User', HttpStatus.NOT_FOUND);

    if (payload.password !== payload.confirmPassword)
      throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);

    const oldPassword = await user.isValidPassword(payload.password);

    if (oldPassword) {
      throw new HttpException(
        'Please choose a password that you have not used before',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await this.utilService.hashPassword(
      payload.password,
    );

    const updatedUser = await this.userService.updateUser(
      { _id: user._id },
      { password: hashedPassword },
    );

    return updatedUser;
  }

  async googleSignIn(userData: GoogleUserPayload, response: Response) {
    if (!userData) {
      throw new BadRequestException('Invalid User');
    }

    let user: User = await this.userRepository.findOneBy({
      email: userData?.email,
    });

    if (!user) {
      user = await this.userService.createUser({
        email: userData?.email,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        avatar: userData?.avatar || null,
        isEmailVerified: true,
      } as unknown as CreateUserDTO);

      await this.notificationService.sendWelcomeEmail(
        user?.email,
        `${user?.firstName} ${user?.lastName}`,
      );
    }

    return await this.login(user, response);
  }

  private generateJwtToken(tokenPayload: TokenPayload) {
    return this.jwtService.sign(tokenPayload);
  }

  private setJwtToCookie(token: string, res: Response) {
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('COOKIE_EXPIRY'),
    );

    res.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  private getVerificationLink(
    OTPCode: string,
    OTPToken?: string,
    email?: string,
  ) {
    const webBaseUrl = this.configService.get('WEB_BASE_URL');

    return `${webBaseUrl}/auth/verification?token=${OTPToken}&code=${OTPCode}&email=${email}`;
  }

  private getPasswordResetUrl(token: string) {
    const webBaseUrl = this.configService.get('WEB_BASE_URL');
    return `${webBaseUrl}/auth/new-password?token=${token}`;
  }
}
