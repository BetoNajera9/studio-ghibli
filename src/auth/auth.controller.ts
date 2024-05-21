import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Controller, Post, Body } from '@nestjs/common'

import { ResponseService } from '@common/classes'
import { IResponse } from '@common/interfaces'
import { DCreateUser } from '@user/dto'

import { AuthService } from './auth.service'
import { IAuthResponse } from './interfaces'
import { EAuthResponse } from './enums'
import { DLogin } from './dto'

@Controller('auth')
export class AuthController {
	private responseService: ResponseService

	constructor(private readonly authService: AuthService) {
		this.responseService = new ResponseService(EAuthResponse)
	}

	@ApiOperation({
		description: 'This endpoint creates the registration of a new user.',
		summary: 'Register user',
	})
	@ApiResponse({
		status: 201,
		description: 'User was register',
	})
	@Post('sign-up')
	async signUp(
		@Body() createUserDto: DCreateUser
	): Promise<IResponse<IAuthResponse>> {
		const user = await this.authService.signUp(createUserDto)

		return this.responseService.handlerResponse<IAuthResponse>(
			true,
			EAuthResponse.SIGNUP,
			user
		)
	}

	@ApiOperation({
		description: 'This endpoint the user log in and obtains an access token.',
		summary: 'The user log in',
	})
	@ApiResponse({
		description: 'Success response',
		status: 200,
	})
	@Post('login')
	async logIn(@Body() dLogin: DLogin): Promise<IResponse<IAuthResponse>> {
		const user = await this.authService.logIn(dLogin)

		return this.responseService.handlerResponse<IAuthResponse>(
			true,
			EAuthResponse.SIGNUP,
			user
		)
	}
}
