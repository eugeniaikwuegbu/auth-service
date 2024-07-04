import { Module } from '@nestjs/common';
import { AppContainer } from 'src/enums/app.container.enum';
import { NotificationService } from './notifications.service';
import { NodeMailerProvider } from './providers/nodemailer.provider';

@Module({
  providers: [
    {
      provide: AppContainer.EMAIL_PROVIDER,
      useClass: NodeMailerProvider,
    },
    NotificationService,
  ],
  imports: [],
  exports: [NotificationService],
})
export class NotificationsModule {}
