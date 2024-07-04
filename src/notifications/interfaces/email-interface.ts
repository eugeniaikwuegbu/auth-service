import { MailOptions } from "./email-options.interface";

export interface IOneEmail {
    email: string;
    subjectOrTemplateId: string;
    htmlOrTemplate?: any;
    options?: MailOptions;
    attachments?: any[];
  }