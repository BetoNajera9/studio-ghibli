import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class DApiParams {
	@ApiProperty({
		name: 'fields',
		description: 'Comma-separated list of fields to include in the response',
		required: false,
	})
	@IsOptional()
	@IsString()
	fields?: string

	@ApiProperty({
		name: 'limit',
		description: 'amount of results (default 50) (maximum 250)',
		required: false,
	})
	@IsOptional()
	@IsNumber()
	@Max(250)
	@Min(1)
	limit?: number

	@ApiProperty({
		name: 'id',
		description: 'Id of the :query, if you need only a register',
		required: false,
	})
	@IsOptional()
	@IsString()
	id?: string
}
