import { IMeta } from './meta.interface'

export interface IDataMeta<T> {
  /**
   * Response details
   *
   * @example {}
   */
  data: T

  /**
   * Meta data
   *
   * @example IMeta
   */
  meta: IMeta
}
