import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configurations/database';
import { CountryService } from '../country/country.service';
import { CountrySchemaDefinition } from '../country/entities/country.entity';
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
      CountrySchemaDefinition,
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
    CountryService,
    AccountTypeRepository,
  ],
  exports: [
    UsersService,
    UserRepository,
    CountryService,
    AccountTypeRepository,
  ],
})
export class UsersModule {}
