import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { HandlerError } from '@common/classes'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const logger = new Logger('Boostrap')

	// Start handlerError
	app.useGlobalFilters(new HandlerError())

	// Set api prefix
	app.setGlobalPrefix('api')

	// Swagger configuration
	const config = new DocumentBuilder()
		.setTitle('Studio Ghibli')
		.setDescription('Develop a user REST API')
		.setVersion('0.0.1')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)

	//Set validation pipe
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
		})
	)

	// Env variables
	const configService = app.get(ConfigService)
	const appConfig = configService.get('app')

	await app.listen(appConfig.port, () => {
		logger.log(`Service running on port ${appConfig.port}`)
	})
}
bootstrap()
