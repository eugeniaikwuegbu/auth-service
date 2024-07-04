import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ChatModule } from './modules/chat/chat.module';
import { CountryModule } from './modules/country/country.module';
import { LoggerModule } from './modules/logger';
import { UsersModule } from './modules/users/users.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    UsersModule,
    CountryModule,
    LoggerModule,
    AuthModule,
    NotificationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        PORT: Joi.number().required(),
        COOKIE_EXPIRY: Joi.string().required(),
        WEB_BASE_URL: Joi.string(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_CLIENT_CALLBACK: Joi.string().required(),
        PROFILE_URL: Joi.string().required(),
        SENDER_NAME: Joi.string().required(),
        SENDER_EMAIL: Joi.string().required(),
        NODEMAILER_USER: Joi.string().required(),
        NODEMAILER_PASSWORD: Joi.string().required(),
        AI_HEADER_TOKEN: Joi.string().required(),
        AI_BASE_URL: Joi.string().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}`,
        },
      }),
      inject: [ConfigService],
    }),
    // ChatGatewayModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// todo:
// add response interceptors  --done
// define response structure across project --done
// add email notifications
// modify error on repositories to signify which document was not found eg `User(the document) was not found`
// use logger across project -done
// test auth endpoints -done
