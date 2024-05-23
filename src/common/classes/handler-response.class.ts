import { IMeta, IResponse } from '@common/interfaces'

export class ResponseService {
	private serviceResponse: Record<string, any>

	/**
	 * Gets all possible answers from the class
	 *
	 * @param  {Record<string, any>} responses?
	 */
	constructor(responses?: Record<string, any>) {
		this.serviceResponse = responses || {}
	}

	/**
	 * Function to generate and return a response
	 *
	 * @param  {boolean} success - A boolean representing the status of response
	 * @param  {string} messageResponse - A string representing the response text
	 * @param  {T} data - All the data to return
	 * @param  {PageMetaDto} meta - Pagination data
	 * @returns IResponse
	 */
	handlerResponse<T>(
		success: boolean,
		messageResponse: string,
		data?: T,
		meta?: IMeta
	): IResponse<T> {
		const index = Object.values(this.serviceResponse).indexOf(messageResponse)
		const code = Object.keys(this.serviceResponse)[index]

		return !code
			? {
					success,
					statusCode: 'UNDEFINED_RESPONSE',
					message: messageResponse,
					data,
					meta,
				}
			: {
					success,
					statusCode: code,
					message: messageResponse,
					data,
					meta,
				}
	}
}
