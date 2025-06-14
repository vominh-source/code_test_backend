import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // chỉ cho phép các trường đã được định nghĩa trong DTO
    }
  ));
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
