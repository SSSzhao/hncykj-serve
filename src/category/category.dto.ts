import { ApiProperty } from '@nestjs/swagger'

export class CreateCategoryDto {
  @ApiProperty({
    required: true,
    description: '分类名称'
  })
  name: string
}
