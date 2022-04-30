/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppConfiguration, appConfiguration } from '@nest-app-hour-nestjs/api/utils-config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY)
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(appConfig.port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${appConfig.port}/${globalPrefix}`
  );
}

bootstrap();
