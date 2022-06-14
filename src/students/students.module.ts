import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { StudentsController } from './students.controller'
import { StudentsService } from './students.service'
import { Student, StudentsSchema } from './students.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentsSchema }])
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
