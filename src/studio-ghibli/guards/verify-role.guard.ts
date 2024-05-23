import {
	InternalServerErrorException,
	UnauthorizedException,
	ExecutionContext,
	CanActivate,
	Injectable,
} from '@nestjs/common'

import { EUserRole } from '@user/enums'

@Injectable()
export class VerifyRoleGuard implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest()

		if (!req.user)
			throw new InternalServerErrorException('Not foun user, internal error')

		if (req.user.role !== EUserRole.ADMIN && req.user.role !== req.params.query)
			throw new UnauthorizedException(`User does not have permissions`)

		return true
	}
}
