import { ConfigModule, registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const isProduction = () => process.env.SERVICE_ENV === 'production'

// Normalize variables of this module
export const config = registerAs('app', () => ({
  port: process.env.PORT,
}))

export default {
  ConfigModule: ConfigModule.forRoot({
    ignoreEnvFile: isProduction(),
    isGlobal: true,
    validationSchema: Joi.object({
      PORT: Joi.number().required(),
    }),
    load: [config]
  }),
}
