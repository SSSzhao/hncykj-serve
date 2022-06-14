import { Controller, HttpCode, Get, Post, Body, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('profile')
  // @HttpCode(404)
  // getHello(): string {
  //   return this.appService.getHello()
  // }

  // @Get(':id')
  // @HttpCode(200)
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat'
  // }
}
