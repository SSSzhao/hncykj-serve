import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductService } from './product.service'
import { Product, ProductSchema } from './product.schema'
import { ProductController } from './product.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
