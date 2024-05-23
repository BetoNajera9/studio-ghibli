import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiParam,
	ApiTags,
} from '@nestjs/swagger'
import {
	ValidationPipe,
	ParseEnumPipe,
	Controller,
	UseGuards,
	Param,
	Query,
	Get,
} from '@nestjs/common'

import { ResponseService } from '@common/classes'
import { DApiParams } from '@studio-ghibli/dto'
import { GAuth } from '@auth/guards'

import { StudioGhibliService } from './studio-ghibli.service'
import { EQuery, EStudioGhibli } from './enums'
import { VerifyRoleGuard } from './guards'

@ApiBearerAuth()
@UseGuards(GAuth)
@ApiTags('Studio Ghibli')
@Controller('studio-ghibli')
export class StudioGhibliController {
	private responseService: ResponseService

	constructor(private readonly studioGhibliService: StudioGhibliService) {
		this.responseService = new ResponseService(EStudioGhibli)
	}

	@Get(':query')
	@UseGuards(VerifyRoleGuard)
	@ApiParam({ name: 'query', enum: EQuery })
	@ApiOperation({
		description:
			'The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli.',
		summary: 'Studio Ghibli API',
	})
	@ApiResponse({
		description: 'Success response',
		status: 200,
	})
	async find(
		@Param('query', new ParseEnumPipe(EQuery)) query: EQuery,
		@Query(new ValidationPipe()) iApiParams: DApiParams
	) {
		const data = await this.studioGhibliService.getApi(query, iApiParams)

		return this.responseService.handlerResponse(
			true,
			EStudioGhibli.SEARCH,
			data
		)
	}
}
