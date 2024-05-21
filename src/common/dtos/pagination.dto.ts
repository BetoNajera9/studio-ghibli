import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'

import { EPageOrder } from '@common/enums'

export class DPagination {
  /**
   * The ordering of the records
   *
   * @example 1
   */
  @ApiPropertyOptional({ enum: EPageOrder, default: EPageOrder.ASC })
  @IsEnum(EPageOrder)
  @IsOptional()
  readonly order?: EPageOrder = EPageOrder.ASC

  /**
   * Represents the number of the current page the user wants to view. It is an index that indicates which result set is being requested.
   *
   * @example 1
   */
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly page?: number = 1

  /**
   * Take option allows you to limit the number of rows returned from a query
   *
   * @example 10
   */
  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly take?: number = 10
}
