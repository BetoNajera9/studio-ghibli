import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsEnum, IsOptional } from 'class-validator'

import { EUserStatus } from '@user/enums'

import { DCreateUser } from './create-user.dto'

export class UpdateUserDto extends PartialType(DCreateUser) {
	/**
	 * The user's status, based on an enum.
	 *
	 * @example EUserStatus.ACTIVE
	 */
	@ApiProperty({
		example: EUserStatus.ACTIVE,
		description: 'The user\'s status, based on an enum',
	})
	@IsEnum(EUserStatus)
	@IsOptional()
	status?: EUserStatus
}
