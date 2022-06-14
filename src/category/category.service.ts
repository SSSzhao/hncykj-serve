import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Category, CategoryDocument } from './category.schema'
import { CreateCategoryDto } from './category.dto'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}

  async findAll() {
    // throw new NotFoundException('找不到')
    return await this.categoryModel.find().exec()
  }

  async create(data: CreateCategoryDto) {
    const createdStudent = await this.categoryModel.create(data)
    return createdStudent
  }

  async getCateProduct() {
    return await this.categoryModel.aggregate([
      {
        $lookup: {
          from: 'product',
          localField: 'name',
          foreignField: 'categoryName',
          as: 'list'
        }
      },
      {
        $project: {
          id: 1,
          name: 1,
          list: { id: 1, name: 1, img: 1, createTime: 1 }
        }
      }
    ])
  }
}
