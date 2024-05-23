import { Module } from '@nestjs/common'

import { UserModule } from '@user/user.module'

import { StudioGhibliController } from './studio-ghibli.controller'
import { StudioGhibliService } from './studio-ghibli.service'
import { StudioGhibliHttpModule } from './studio-ghibli.http'

import AuthConfig from '@auth/auth.config'

@Module({
	imports: [StudioGhibliHttpModule, UserModule, AuthConfig.ConfigModule],
	controllers: [StudioGhibliController],
	providers: [StudioGhibliService],
})
export class StudioGhibliModule {}
