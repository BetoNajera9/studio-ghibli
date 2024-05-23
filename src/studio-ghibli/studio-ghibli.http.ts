import { HttpModule } from '@nestjs/axios'

export const StudioGhibliHttpModule = HttpModule.registerAsync({
	useFactory: () => ({
		baseURL: 'https://ghibliapi.vercel.app/',
		timeout: 5000,
		maxRedirects: 3,
	}),
})
