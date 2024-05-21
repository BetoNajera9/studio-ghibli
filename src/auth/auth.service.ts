import { Inject, Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

import { User } from '@user/entities/user.entity'
import { UserService } from '@user/user.service'
import { ConfigType } from '@nestjs/config'
import { DCreateUser } from '@user/dto'

import { IAuthResponse, IPayload } from './interfaces'
import { config } from './auth.config'
import { DLogin } from './dto'

@Injectable()
export class AuthService {
	constructor(
		@Inject(config.KEY)
		private readonly configService: ConfigType<typeof config>,
		private readonly userService: UserService
	) {}

	private signToken(iPayload: IPayload): string {
		return jwt.sign(iPayload, this.configService.jwtSecret, {
			expiresIn: this.configService.jwtExpires,
		})
	}

	async signUp(dCreateUser: DCreateUser): Promise<IAuthResponse> {
		const user = await this.userService.create(dCreateUser)

		const accessToken = this.signToken({ id: user.id })

		return {
			user,
			accessToken,
		}
	}

	async logIn(dLogin: DLogin): Promise<IAuthResponse> {
		const user = await this.userService.findByEmailOrUserName(dLogin.query)

		const accessToken = this.signToken({ id: user.id })

		return {
			user,
			accessToken,
		}
	}
}
