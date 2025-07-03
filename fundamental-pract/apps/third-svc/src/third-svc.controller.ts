import { Controller, Get } from '@nestjs/common';
import { ThirdSvcService } from './third-svc.service';

@Controller()
export class ThirdSvcController {
  constructor(private readonly thirdSvcService: ThirdSvcService) {}

  @Get()
  getHello(): string {
    return this.thirdSvcService.getHello();
  }
}
