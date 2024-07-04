import { MailOptions } from './email-options.interface';

interface IEmailProvider {
  sendMail(
    to: string,
    subject: string,
    message: Text | string,
    options?: MailOptions,
    attachments?: any | any[],
  ): any;
}

export default IEmailProvider;
