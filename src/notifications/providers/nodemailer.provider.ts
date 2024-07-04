import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodeMailer from 'nodemailer';
import { MailOptions } from '../interfaces/email-options.interface';
import IEmailProvider from '../interfaces/email-provider.interface';

@Injectable()
export class NodeMailerProvider implements IEmailProvider {
  private readonly configService = new ConfigService();
  private transporter: any;
  private senderEmail;
  private senderName;
  constructor() {
    this.senderName = this.configService.get('SENDER_NAME');
    this.senderEmail = this.configService.get('SENDER_EMAIL');
    this.transporter = nodeMailer.createTransport({
      service: 'gmail',
      pool: true,
      auth: {
        user: this.configService.get('NODEMAILER_USER'),
        pass: this.configService.get('NODEMAILER_PASSWORD'),
      },
    });
  }

  sendMail = async (
    to: string,
    subject: string,
    html: string,
    options?: MailOptions,
  ) => {
    const msg = {
      subject: `${subject}`,
      to,
      html,
      from: `${this.senderName} <${this.senderEmail}>`,
    };

    if (options) {
      if (options.cc) msg['cc'] = options.cc;

      if (options.fromName)
        msg['from'] = `"${options.fromName}" <${this.senderEmail}>`;
    }

    return await this.transporter.sendMail(msg);
  };

  sendMultiple = async (tos: any, subject: any, html: any) => {
    const bulkMailComposer = [];

    tos.map((to) => {
      const mail = {
        from: `"${this.senderName}" <${this.senderEmail}>`,
        html: html,
        to,
        subject,
      };

      bulkMailComposer.push(mail);
    });

    return await this.transporter.sendMail(bulkMailComposer);
  };
}
