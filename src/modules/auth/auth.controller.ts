import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { UserDocument } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/user-decorator';
import { ForgotPasswordDTO } from './dtos/forgotPassword-dto';
import { LoginDTO, ResendVerificationDTO } from './dtos/login-dto';
import { ResetPasswordDTO } from './dtos/reset-password.dto';
import { VerifyOTP } from './dtos/verify-email.dto';
import { GoogleOauthGuard } from './guards/google-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guards';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  protected readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/signup')
  async register(@Body() payload: CreateUserDTO) {
    try {
      const response = await this.authService.registerUser(payload);
      return { message: 'Signup Successful', response };
    } catch (error) {
      this.logger.error('AuthController :: signup', error.message);
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @CurrentUser() user: UserDocument,
    @Body() loginDto: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const response = await this.authService.login(user, res);
      return { message: 'Login Successful', response };
    } catch (error) {
      this.logger.error('AuthController :: login');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/verify-account')
  async verifyAccount(@Body() payload: VerifyOTP) {
    try {
      const response = await this.authService.verifyAccount(payload);
      return { message: 'Accounnt verification Successful', response };
    } catch (error) {
      this.logger.error('AuthController :: verify-account');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/resend-verification')
  async resendVerification(@Body() payload: ResendVerificationDTO) {
    try {
      await this.authService.resendVerification(payload.email);
      return {
        message:
          'A verification mail has been sent successfully, Please check your email',
      };
    } catch (error) {
      this.logger.error('AuthController :: resend-verification');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/forgot-password')
  async forgotPassword(@Body() payload: ForgotPasswordDTO) {
    try {
      await this.authService.forgotPassword(payload);
      return {
        message:
          'If you have an account with us, an email has been sent to you with password reset instructions',
      };
    } catch (error) {
      this.logger.error('AuthController :: forgot-password');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/reset-password')
  async resetPassword(@Body() payload: ResetPasswordDTO) {
    try {
      const response = await this.authService.resetPassword(payload);
      return {
        message: 'Password reset successful',
        response,
      };
    } catch (error) {
      this.logger.error('AuthController :: reset-password');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async auth() {}

  @Get('/google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    try {
      await this.authService.googleSignIn(req.user, res);
      const profileUrl = this.configService.get('PROFILE_URL');
      res.redirect(profileUrl);
    } catch (error) {
      this.logger.error('AuthController :: google-callback');
      this.logger.error(error);
      throw new HttpException(
        error.message || 'Operation failed',
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
