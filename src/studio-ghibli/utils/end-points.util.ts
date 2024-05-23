import { DApiParams } from '@studio-ghibli/dto'
import { EQuery } from '@studio-ghibli/enums'

export const EndPoints = (role: EQuery, iApiParams: DApiParams) => {
	let params = new URLSearchParams('')
	let url = `${role}`

	if (iApiParams.id) url = `${role}/${iApiParams.id}`

	if (iApiParams.limit) params.append('limit', String(iApiParams.limit))

	if (iApiParams.fields) params.append('fields', iApiParams.fields)

	return `${url}?${params}`
}
