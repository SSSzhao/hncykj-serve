import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common'
import { Request, Response } from 'express'
import dayjs from 'dayjs'

@Catch(HttpException)
export class HttpExecptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const message = exception.message

    response.status(status).json({
      status: status,
      message,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      path: request.url
    })
  }
}
