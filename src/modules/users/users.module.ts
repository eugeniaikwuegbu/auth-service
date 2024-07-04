import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configurations/database';
import { LoggerModule } from '../logger';
import { AccountTypeSchemaDefinition } from './entities/account_type.entity';
import { UserSchemaDefinition } from './entities/user.entity';
import { AccountTypeRepository } from './repositories/account_type.repository';
import { UserRepository } from './repositories/user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    DatabaseModule.forFeature([
      UserSchemaDefinition,
      AccountTypeSchemaDefinition,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository, AccountTypeRepository],
  exports: [UsersService, UserRepository, AccountTypeRepository],
})
export class UsersModule {}
