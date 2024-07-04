import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class CustomIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const optionsWithCors: ServerOptions = {
      ...options,
      cors: {
        origin: '*', // Allow all origins (adjust for production)
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Accept'],
      },
    };
    return super.createIOServer(port, optionsWithCors);
  }
}
