import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/user-decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { UserDocument } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('User')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getAuthUser(@CurrentUser() user: UserDocument) {
    return { response: user, message: 'User fetched' };
  }
}
