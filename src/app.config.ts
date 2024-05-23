import { ConfigModule, registerAs } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import * as Joi from 'joi'

export const isProduction = () => process.env.SERVICE_ENV === 'production'

// Normalize variables of this module
export const config = registerAs('app', () => ({
	port: process.env.PORT,
	server: process.env.SERVER || `http://localhost:${process.env.PORT}`,

	databaseUrl: process.env.DATABASE_URL,
}))

export default {
	// Verifying if exists all variables for the API
	ConfigModule: ConfigModule.forRoot({
		ignoreEnvFile: isProduction(),
		isGlobal: true,
		validationSchema: Joi.object({
			PORT: Joi.number().required(),
			SERVER: Joi.string().uri().optional(),

			DATABASE_URL: Joi.string().required(),
		}),
		load: [config],
	}),

	// Instance of the MongooseModule
	MongooseModule: MongooseModule.forRoot(config().databaseUrl),
}
