import { User } from '@user/entities/user.entity'

export interface IAuthResponse {
	/**
	 * JsonWebToken
	 *
	 * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ2xhdWR...
	 */
	accessToken: string

	/**
	 * The user model
	 *
	 * @example User
	 */
	user: User
}
