import { Module } from '@nestjs/common'

import { UserController } from './user.controller'
import { UserService } from './user.service'

import AuthConfig from '@auth/auth.config'
import Config from './user.config'

@Module({
	imports: [
		Config.ConfigModule,
		Config.MongooseFeature,
		AuthConfig.ConfigModule,
	],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
