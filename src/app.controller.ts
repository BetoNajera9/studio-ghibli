import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'

@ApiTags('Signature')
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@ApiOperation({
		description: 'Signature and service data.',
		summary: 'Signature service',
	})
	@ApiResponse({
		status: 200,
		description: 'Signature',
		type: Object,
	})
	@Get()
	signature() {
		return this.appService.signature()
	}
}
