import { Controller, Get } from '@nestjs/common';

import { Message } from '@nest-app/api-interfaces';

@Controller()
export class AppController {

  @Get('hello')
  getData(): string {
    return 'hello'
  }
}
