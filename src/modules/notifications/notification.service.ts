import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailOptions } from 'src/interfaces/email-options.interface';
import NotificationMicroService from '../../microservices/notification';
import {
  passwordResetEmailSubject,
  verificationEmailSubject,
  welcomeEmailSubject,
} from './emailSubjects/email-subjects';
import { forgotPasswordEmailHtml } from './templates/forgot-password';
import { verificationEmailHtml } from './templates/verify email';
import { welcomeEmailHtml } from './templates/welcome-email';

export class NotificationService {
  private configService = new ConfigService();
  private options: MailOptions = {
    fromEmail: this.configService.get('SENDER_EMAIL'),
    fromName: this.configService.get('SENDER_NAME'),
  };

  constructor(
    @Inject(NotificationMicroService)
    private readonly notificationMicroService: NotificationMicroService,
  ) {}

  async sendWelcomeEmail(email: string, userName: string) {
    const html = welcomeEmailHtml(userName);
    const subject = welcomeEmailSubject;
    return this.notificationMicroService.sendOneEmail({
      to: email,
      subject,
      html,
    });
  }

  async sendVerificationEmail(email: string, userName: string, otp: string) {
    const html = verificationEmailHtml(userName, otp);
    const subject = verificationEmailSubject;
    return this.notificationMicroService.sendOneEmail({
      to: email,
      subject,
      html,
    });
  }

  async sendForgotPasswordEmail(
    email: string,
    userName: string,
    passwordResetLink: string,
  ) {
    const html = forgotPasswordEmailHtml(userName, passwordResetLink);
    const subject = passwordResetEmailSubject;
    return this.notificationMicroService.sendOneEmail({
      to: email,
      subject,
      html,
    });
  }
}
