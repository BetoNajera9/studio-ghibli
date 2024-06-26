import { IsObjectIdPipe } from 'nestjs-object-id'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger'
import {
	Controller,
	UseGuards,
	Delete,
	Param,
	Patch,
	Query,
	Body,
	Get,
} from '@nestjs/common'

import { ResponseService } from '@common/classes'
import { IResponse } from '@common/interfaces'
import { GAuth } from '@server/auth/guards'
import { DPagination } from '@common/dtos'

import { User } from './entities/user.entity'
import { UserService } from './user.service'
import { EUserResponse } from './enums'
import { DUpdateUser } from './dto'

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(GAuth)
@Controller('user')
export class UserController {
	private responseService: ResponseService

	constructor(private readonly userService: UserService) {
		this.responseService = new ResponseService(EUserResponse)
	}

	@ApiOperation({
		description: 'This endpoint obtains all registered users in database.',
		summary: 'Get all the users',
	})
	@ApiResponse({
		description: 'Success response',
		status: 200,
	})
	@Get()
	async findAll(@Query() dPagination: DPagination): Promise<IResponse<User[]>> {
		const users = await this.userService.findAll(dPagination)

		return this.responseService.handlerResponse<User[]>(
			true,
			EUserResponse.SEARCH,
			users.data,
			users.meta
		)
	}

	@ApiOperation({
		description:
			'This endpoint obtains the user with id from the identifier of the parameter.',
		summary: 'Get a user by id',
	})
	@ApiResponse({
		description: 'Success response',
		status: 200,
	})
	@Get(':id')
	async findOne(
		@Param('id', IsObjectIdPipe) id: string
	): Promise<IResponse<User>> {
		const user = await this.userService.findOne(id)

		return this.responseService.handlerResponse<User>(
			true,
			EUserResponse.SEARCH,
			user
		)
	}

	@ApiOperation({
		description:
			'This endpoint updates the user data with id from the identifier of the parameter.',
		summary: 'Update user',
	})
	@ApiResponse({
		description: 'Success response',
		status: 200,
	})
	@Patch(':id')
	async update(
		@Param('id', IsObjectIdPipe) id: string,
		@Body() updateUserDto: DUpdateUser
	): Promise<IResponse<User>> {
		const user = await this.userService.update(id, updateUserDto)

		return this.responseService.handlerResponse<User>(
			true,
			EUserResponse.UPDATE,
			user
		)
	}

	@ApiOperation({
		description:
			'This endpoint removes the user with id from the identifier of the parameter.',
		summary: 'Delete user',
	})
	@ApiResponse({
		description: 'Successful response',
		status: 200,
	})
	@Delete(':id')
	async remove(
		@Param('id', IsObjectIdPipe) id: string
	): Promise<IResponse<User>> {
		const user = await this.userService.remove(id)

		return this.responseService.handlerResponse<User>(
			true,
			EUserResponse.REMOVE,
			user
		)
	}
}
