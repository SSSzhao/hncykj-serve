import { ApiProperty } from '@nestjs/swagger'

export class CreateStudentDto {
  @ApiProperty({
    description: 'name'
  })
  name: string

  @ApiProperty({
    description: 'age'
  })
  age: number
}
