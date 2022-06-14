import { Controller, Bind, Post, Body, HttpCode } from '@nestjs/common'
import { ProductService } from './product.service'
import { ApiOperation } from '@nestjs/swagger'
import { SelectProductDto } from './product.dto'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    tags: ['查询产品信息'],
    description: '查询所有产品'
  })
  @Post('list')
  @HttpCode(200)
  @Bind(Body())
  async list(body: SelectProductDto) {
    return await this.productService.findListPage(body)
  }
}
