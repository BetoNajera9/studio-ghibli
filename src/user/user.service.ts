import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ConfigType } from '@nestjs/config'
import { Model } from 'mongoose'
import * as Bcrypt from 'bcrypt'

import { EResponseError } from '@common/enums'
import { IDataMeta } from '@common/interfaces'
import { handlerMeta } from '@common/utils'
import { DPagination } from '@common/dtos'

import { DCreateUser, UpdateUserDto } from './dto'
import { User } from './entities/user.entity'
import { config } from './user.config'

@Injectable()
export class UserService {
	constructor(
		@Inject(config.KEY)
		private readonly configUserService: ConfigType<typeof config>,
		@InjectModel(User.name)
		private readonly userModel: Model<User>
	) {}

	async create(createUserDto: DCreateUser): Promise<User> {
		createUserDto.password = await Bcrypt.hash(
			createUserDto.password,
			this.configUserService.saltRounds
		)

		return await this.userModel.create(createUserDto)
	}

	async findAll(dPagination: DPagination): Promise<IDataMeta<User[]>> {
		const users = await this.userModel
			.find()
			.limit(dPagination.take)
			.skip((dPagination.page - 1) * dPagination.take)
			.sort({ createdAt: dPagination.order })

		if (!users.length) throw new NotFoundException(EResponseError.NOT_FOUND)

		const itemCount = await this.userModel.countDocuments()
		const meta = handlerMeta(dPagination, itemCount)

		return { data: users, meta }
	}

	async findOne(id: string): Promise<User> {
		const user = await this.userModel.findById(id)

		if (!user) throw new NotFoundException(EResponseError.NOT_FOUND)

		return user
	}

	async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
		const user = await this.userModel.findByIdAndUpdate(id, updateUserDto)

		if (!user) throw new NotFoundException(EResponseError.NOT_FOUND)

		return { ...user.toJSON(), ...updateUserDto }
	}

	async remove(id: string) {
		const user = this.userModel.findByIdAndDelete(id)

		if (!user) throw new NotFoundException(EResponseError.NOT_FOUND)

		return user
	}
}
