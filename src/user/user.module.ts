import { Module } from '@nestjs/common'

import { UserController } from './user.controller'
import { UserService } from './user.service'

import Config from './user.config'

@Module({
	imports: [Config.ConfigModule, Config.MongooseFeature],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
