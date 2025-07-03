import { Controller, Get } from '@nestjs/common';
import { FirstSvcService } from './first-svc.service';

@Controller()
export class FirstSvcController {
  constructor(private readonly firstSvcService: FirstSvcService) {}

  @Get()
  getHello(): string {
    return this.firstSvcService.getHello();
  }
}
