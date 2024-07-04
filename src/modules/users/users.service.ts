import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AccountType } from 'src/enums/account_type.enum';
import { CreateUserDTO } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AccountTypeRepository } from './repositories/account_type.repository';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly accountTypeRepository: AccountTypeRepository,
  ) {}

  async createUser(createUserDTO: CreateUserDTO) {
    await this.validateCreateUserDTO(createUserDTO);
    const accountType = await this.accountTypeRepository.findOne({
      slug: AccountType.User,
    });

    return await this.userRepository.create({
      ...createUserDTO,
      type: accountType,
    });
  }

  async verifyUser(email: string, password: string) {
    try {
      const user = await this.userRepository.findOne({ email });

      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      if (!user?.isValidPassword(password)) {
        throw new UnauthorizedException('Invalid email or password');
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async getUser(getUseDto: GetUserDto): Promise<User> {
    return this.userRepository.findOne(getUseDto);
  }

  async updateUser(_id, updateUserDto: UpdateUserDto) {
    return this.userRepository.findByIdAndUpdate(_id, {
      $set: updateUserDto,
    });
  }

  private async validateCreateUserDTO(createUserDTO: CreateUserDTO) {
    const userExists = await this.userRepository.findOne({
      email: createUserDTO.email,
    });

    if (userExists) {
      throw new UnprocessableEntityException('Account already exists.');
    }
  }
}
