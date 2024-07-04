import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck() {
    return 'Auth Service is up and running';
  }
}
