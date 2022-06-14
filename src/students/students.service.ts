import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Student, StudentsDocument } from './students.schema'
import { CreateStudentDto } from './students.dto'

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentsModel: Model<StudentsDocument>
  ) {}

  async create(data: CreateStudentDto) {
    console.log(data)
    const createdStudent = await this.studentsModel.create(data)
    return createdStudent
  }

  async findAll() {
    return await this.studentsModel.find().exec()
  }

  async findById(_id: string) {
    return await this.studentsModel.findById(_id).exec()
  }
}
