import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:3000'],
      allowedHeaders: ['Content-Type', 'Accept'],
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
      credentials: true,
      optionsSuccessStatus: 204,
      preflightContinue: false
    }
  });
  await app.listen(3000);
}
bootstrap();
