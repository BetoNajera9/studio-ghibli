import { Module } from '@nestjs/common';

import Config from './app.config'

@Module({
  imports: [Config.ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
