import { Inject } from '@nestjs/common';
import { AppContainer } from 'src/enums/app.container.enum';
import IEmailProvider from './interfaces/email-provider.interface';
import {
  passwordResetEmailSubject,
  verificationEmailSubject,
  welcomeEmailSubject,
} from './templates/email-subjects';
import { forgotPasswordEmailHtml } from './templates/forgot-password.template';
import { verificationEmailHtml } from './templates/verify-email.template';
import { welcomeEmailHtml } from './templates/welcome-email.template';

export class NotificationService {
  constructor(
    @Inject(AppContainer.EMAIL_PROVIDER)
    private readonly mailProvider: IEmailProvider,
  ) {}

  async sendWelcomeEmail(email: string, userName: string) {
    const html = welcomeEmailHtml(userName);
    const subject = welcomeEmailSubject;
    return this.mailProvider.sendMail(email, subject, html);
  }

  async sendVerificationEmail(
    email: string,
    userName: string,
    verificationLink: string,
  ) {
    const html = verificationEmailHtml(userName, verificationLink);
    const subject = verificationEmailSubject;
    return this.mailProvider.sendMail(email, subject, html);
  }

  async sendForgotPasswordEmail(
    email: string,
    userName: string,
    passwordResetLink: string,
  ) {
    const html = forgotPasswordEmailHtml(userName, passwordResetLink);
    const subject = passwordResetEmailSubject;
    return this.mailProvider.sendMail(email, subject, html);
  }
}
