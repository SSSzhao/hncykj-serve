import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type StudentsDocument = Student & Document

@Schema({
  collection: 'students'
})
export class Student {
  @Prop()
  name: string

  @Prop()
  age: number
}

export const StudentsSchema = SchemaFactory.createForClass(Student)
