import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from './students/students.module'
import { MongooseModule } from '@nestjs/mongoose'
import { cyysdbUrl } from '../config/mongodb'
import { CategoryModule } from './category/category.module'
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { TransformInterceptor } from './interceptor/transform.interceptor'
import { HttpExecptionFilter } from './filters/http-execption.filter'
import { ProductModule } from './product/product.module'

@Module({
  imports: [
    StudentsModule,
    CategoryModule,
    MongooseModule.forRoot(cyysdbUrl),
    ProductModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    },
    {
      provide: APP_FILTER,
      useClass: HttpExecptionFilter
    },
    AppService
  ]
})
export class AppModule {}
