import { DPagination } from '@common/dtos'
import { IMeta } from '@common/interfaces'

/**
 * The IMeta object is generated
 *
 * @param  {PaginationInterface} pagination
 * @param  {number} itemCount
 * @returns IMeta
 */
export const handlerMeta = (
	pagination: DPagination,
	itemCount: number
): IMeta => {
	const pageCount = Math.ceil(itemCount / pagination.take)

	return {
		page: pagination.page,
		take: pagination.take,
		itemCount,
		pageCount,
		hasPreviousPage: pagination.page > 1,
		hasNextPage: pagination.page < pageCount,
	}
}
