import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CategoryDocument = Category & Document

@Schema({
  collection: 'category'
})
export class Category {
  @Prop()
  name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
