import { ConfigType } from '@nestjs/config'
import * as Jwt from 'jsonwebtoken'
import { Request } from 'express'
import {
	UnauthorizedException,
	ExecutionContext,
	CanActivate,
	Injectable,
	Inject,
} from '@nestjs/common'

import { UserService } from '@user/user.service'
import { IPayload } from '@auth/interfaces'

import { config } from '../auth.config'

@Injectable()
export class GAuth implements CanActivate {
	constructor(
		@Inject(config.KEY)
		private readonly configService: ConfigType<typeof config>,
		private readonly userService: UserService
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest()

		const bearerToken = req.headers['authorization']
		if (!bearerToken) throw new UnauthorizedException('Invalid Token')

		const token = bearerToken.replace('Bearer ', '')

		const manageToken = Jwt.verify(
			token,
			this.configService.jwtSecret
		) as IPayload

		if (!manageToken) throw new UnauthorizedException('Invalid Token')

		const user = await this.userService.findOne(manageToken.sub)
		if (!user) throw new UnauthorizedException('Invalid Token')

		req.user = user

		return true
	}
}
