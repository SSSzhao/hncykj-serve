import { Controller, Get, Post, Body, Param, Headers } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './students.dto'
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger'

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('all')
  get() {
    return this.studentsService.findAll()
  }

  @Post('create')
  async create(@Body() body: CreateStudentDto) {
    console.log(body)
    return await this.studentsService.create(body)
  }

  @ApiOperation({
    tags: ['获取用户信息'],
    description: '获取用户信息'
  })
  @ApiParam({ name: '_id', description: '用户id', required: true })
  @ApiResponse({ description: '成功', status: 200 })
  @ApiInternalServerErrorResponse({ description: '服务端异常' })
  @Get(':_id')
  async findOne(@Param('_id') _id: string, @Headers() token: string) {
    console.log(token)
    return await this.studentsService.findById(_id)
  }
}
