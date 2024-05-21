import { IsNotEmpty, MinLength, IsString, Matches } from 'class-validator'
import { Transform } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class DLogin {
	/**
	 * The user’s email address or username
	 *
	 * @example Kacie_Nader6@gmail.com
	 */
	@ApiProperty({
		example: 'Kacie_Nader6@gmail.com',
		description: 'The user’s email address or username',
	})
	@Transform(({ value }) => value.toLowerCase())
	@IsNotEmpty()
	@IsString()
	query: string

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
}
