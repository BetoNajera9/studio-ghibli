import { IMeta } from './meta.interface'

export interface IResponse<T> {
  /**
   * Information if the request was successful
   *
   * @example true
   */
  success: boolean

  /**
   * the response ststusCode optimizing the response status
   *
   * @example UNDEFINED_RESPONSE
   */
  statusCode: string

  /**
   * General information of the response
   *
   * @example The user was successfully created
   */
  message: string

  /**
   * Response details
   *
   * @example {}
   */
  data?: T

  /**
   * Meta data
   *
   * @example IMeta
   */
  meta?: IMeta
}
