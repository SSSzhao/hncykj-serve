import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema({
  collection: 'product'
})
export class Product {
  @Prop()
  name: string

  @Prop()
  img: string

  @Prop()
  categoryId: string

  @Prop()
  createTime: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
