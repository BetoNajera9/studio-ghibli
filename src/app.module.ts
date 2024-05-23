import { Module } from '@nestjs/common'

import { UserModule } from '@user/user.module'

import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { AppService } from './app.service'

import Config from './app.config'

@Module({
	imports: [Config.ConfigModule, Config.MongooseModule, UserModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
