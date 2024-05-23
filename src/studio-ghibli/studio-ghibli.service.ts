import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'

import { EndPoints } from './utils'
import { DApiParams } from './dto'
import { EQuery } from './enums'

@Injectable()
export class StudioGhibliService {
	constructor(private readonly client: HttpService) {}

	async getApi(role: EQuery, iApiParams: DApiParams) {
		const url = EndPoints(role, iApiParams)

		const { data } = await this.client.axiosRef.get(url)

		return data
	}
}
