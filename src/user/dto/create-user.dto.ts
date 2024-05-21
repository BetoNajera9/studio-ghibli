import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import {
	IsNotEmpty,
	MinLength,
	IsString,
	IsEmail,
	Matches,
	IsEnum,
} from 'class-validator'

import { EUserRole } from '@user/enums'

export class DCreateUser {
	/**
	 * The user’s first name.
	 *
	 * @example Orval
	 */
	@ApiProperty({
		example: 'Orval',
		description: 'The user’s first name',
	})
	@Transform(({ value }) => value.toLowerCase())
	@IsNotEmpty()
	@MinLength(3)
	@IsString()
	fisrtName: string

	/**
	 * The user’s last name.
	 *
	 * @example Upton
	 */
	@ApiProperty({
		example: 'Upton',
		description: 'The user’s last name',
	})
	@Transform(({ value }) => value.toLowerCase())
	@IsNotEmpty()
	@MinLength(3)
	@IsString()
	lastName: string

	/**
	 * The user’s email address, which is often used as a username.
	 *
	 * @example Upton
	 */
	@ApiProperty({
		example: 'Kacie_Nader6@gmail.com',
		description: 'The user’s email address, which is often used as a username',
	})
	@Transform(({ value }) => value.toLowerCase())
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string

	/**
	 * The user’s email address, which is often used as a username.
	 *
	 * @example Dasia83
	 */
	@ApiProperty({
		example: 'Dasia83',
		description: 'The user’s email address, which is often used as a username',
	})
	@Transform(({ value }) => value.toLowerCase())
	@IsNotEmpty()
	@MinLength(3)
	@IsString()
	userName: string

	/**
	 * The user’s password, which should be securely stored using hashing and salting. user’s email address, which is often used as a username.
	 *
	 * @example oicujh49M...
	 */
	@ApiProperty({
		example: 'oicujh49r8chuiSndc78hu',
		description:
			'The user’s password, which should be securely stored using hashing and salting. user’s email address, which is often used as a username',
	})
	@Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message:
			'The password must have a Uppercase, lowercase letter and a number',
	})
	@IsNotEmpty()
	@MinLength(8)
	@IsString()
	password: string

	/**
	 * The user's role in the application.
	 *
	 * @example admin
	 */
	@ApiProperty({
		example: EUserRole.ADMIN,
		description: 'The user\'s role in the application',
	})
	@IsEnum(EUserRole)
	@IsNotEmpty()
	role: EUserRole
}
