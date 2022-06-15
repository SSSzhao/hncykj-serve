import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })

  // 处理跨域
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // 全局路由前缀
  // app.setGlobalPrefix('v1')
  await app.listen(8001)
}
bootstrap()
