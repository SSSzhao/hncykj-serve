import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product, ProductDocument } from './product.schema'
import { SelectProductDto } from './product.dto'
import { mapValues } from 'lodash'
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  // 分页查询商品
  async findListPage(data: SelectProductDto) {
    const { name, categoryId, pageNum = 1, pageSize = 10 } = data
    const where = {
      name: new RegExp(name),
      categoryId: new RegExp(categoryId)
    }
    const list = await this.productModel
      .find(where, {
        name: 1,
        categoryId: 1,
        categoryName: 1,
        img: 1,
        createTime: 1
      })
      .sort({ createTime: 1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .exec()
    const total = await this.productModel.find(where).count()

    return mapValues(
      {
        list,
        total,
        pageNum,
        pageSize,
        pages: Math.ceil(total / pageSize)
      },
      i => +i || i
    )
  }
}
