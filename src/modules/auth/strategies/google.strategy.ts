import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  private logger = new Logger(GoogleStrategy.name);
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get('GOOGLE_CLIENT_CALLBACK'),
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    try {
      const { name, email, picture } = profile;

      const user = {
        email,
        firstName: name?.givenName,
        lastName: name?.familyName,
        avatar: picture,
        _accessToken,
        _refreshToken,
      };

      this.logger.log('user===>>', user);

      done(null, user);
    } catch (error) {
      this.logger.error('error====>>', error);
      this.logger.error('error====>>', error.message);
    }
  }
}
