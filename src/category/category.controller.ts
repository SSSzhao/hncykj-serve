import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Bind,
  HttpStatus
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './category.dto'
import { ApiOperation } from '@nestjs/swagger'

@Controller({ path: 'category' })
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    tags: ['查询分类信息'],
    description: '查询所有分类'
  })
  @Get('list')
  async list() {
    return await this.categoryService.findAll()
  }

  @Post('create')
  @Bind(Body(), Req(), Res())
  async create(body: CreateCategoryDto, req, res) {
    console.log(body)
    res.status(HttpStatus.CREATED).json(body)
    // return body
    // return await this.categoryService.create(body)
  }

  @Get('getCateProduct')
  async getCateProduct() {
    return await this.categoryService.getCateProduct()
  }
}
