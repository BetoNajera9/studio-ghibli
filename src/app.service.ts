import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'

import { config } from './app.config'

@Injectable()
export class AppService {
	constructor(
		@Inject(config.KEY)
		private readonly configUserService: ConfigType<typeof config>
	) {}

	signature() {
		return {
			ProjectName: 'Studio Ghibli',
			Server: this.configUserService.server,
			Repository: 'https://github.com/BetoNajera9/studio-ghibli',
			Author: 'Roberto Mirón Nájera',
		}
	}
}
