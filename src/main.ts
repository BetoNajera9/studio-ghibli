import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Boostrap')

  const configService = app.get(ConfigService)
  const appConfig = configService.get('app');

  await app.listen(appConfig.port, () => {
    logger.log(`Service running on port ${appConfig.port}`)
  });
}
bootstrap();
