import { ApiProperty } from '@nestjs/swagger'

export class CreateProductDto {
  @ApiProperty({
    required: true,
    description: '名称'
  })
  name: string

  @ApiProperty({
    required: true,
    description: '分类Id'
  })
  categoryId: string

  @ApiProperty({
    required: true,
    description: '图片'
  })
  img: string
}

export class SelectProductDto {
  @ApiProperty({
    description: 'id'
  })
  _id: string

  @ApiProperty({
    description: '名称'
  })
  name: string

  @ApiProperty({
    description: '分类Id'
  })
  categoryId: string

  @ApiProperty({
    default: 1,
    description: '当前页'
  })
  pageNum: number

  @ApiProperty({
    default: 10,
    description: '页大小'
  })
  pageSize: number
}
