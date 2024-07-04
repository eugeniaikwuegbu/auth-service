import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/configurations/database';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { NotificationService } from 'src/notifications/notifications.service';
import { UtilityService } from 'src/utils/utils';
import { CountrySchemaDefinition } from '../country/entities/country.entity';
import { LoggerModule } from '../logger';
import { AccountTypeSchemaDefinition } from '../users/entities/account_type.entity';
import { UserSchemaDefinition } from '../users/entities/user.entity';
import { AccountTypeRepository } from '../users/repositories/account_type.repository';
import { UserRepository } from '../users/repositories/user.repository';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AppContainer } from 'src/enums/app.container.enum';
import { NodeMailerProvider } from 'src/notifications/providers/nodemailer.provider';

@Module({
  imports: [
    NotificationsModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}`,
        },
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    DatabaseModule.forFeature([
      UserSchemaDefinition,
      AccountTypeSchemaDefinition,
      CountrySchemaDefinition,
    ]),
    UsersModule,
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    UsersService,
    UserRepository,
    JwtStrategy,
    GoogleStrategy,
    AccountTypeRepository,
    UtilityService,
    NotificationService,
    { provide: AppContainer.EMAIL_PROVIDER, useClass: NodeMailerProvider },
  ],
  exports: [UsersService],
})
export class AuthModule {}
