import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { EUserRole, EUserStatus } from '@user/enums'

@Schema()
export class User extends Document {
	/**
	 * The user’s first name.
	 *
	 * @example Orval
	 */
	@Prop({ required: true })
	fisrtName: string

	/**
	 * The user’s last name.
	 *
	 * @example Upton
	 */
	@Prop({ required: true })
	lastName: string

	/**
	 * The user’s email address, which is often used as a username.
	 *
	 * @example Upton
	 */
	@Prop({ required: true, unique: true })
	email: string

	/**
	 * The user’s email address, which is often used as a username.
	 *
	 * @example Dasia83
	 */
	@Prop({ required: true, unique: true })
	userName: string

	/**
	 * The user’s password, which should be securely stored using hashing and salting. user’s email address, which is often used as a username.
	 *
	 * @example oicujh49r8chuiendc78hu...
	 */
	@Prop({ required: true })
	password: string

	/**
	 * The user's role in the application.
	 *
	 * @example 'admin'
	 */
	@Prop({ required: true, type: String, enum: EUserRole })
	role: EUserRole

	/**
	 * The user's status, based on an enum.
	 *
	 * @example EUserStatus.ACTIVE
	 */
	@Prop({ type: String, enum: EUserStatus, default: EUserStatus.ACTIVE })
	status: EUserStatus

	/**
	 * The date and time when the user account was created.
	 *
	 * @example 2024-05-21T12:34:56.000Z
	 */
	@Prop({ default: Date.now })
	createdAt: Date

	/**
	 * The date and time when the user account was created.
	 *
	 * @example 2024-05-21T12:34:56.000Z
	 */
	@Prop({ default: Date.now })
	updatedAt: Date
}

export const SUser = SchemaFactory.createForClass(User)
