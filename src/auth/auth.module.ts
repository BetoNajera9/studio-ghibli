import { Module } from '@nestjs/common'

import { UserModule } from '@user/user.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import Config from './auth.config'

@Module({
	imports: [Config.ConfigModule, UserModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
