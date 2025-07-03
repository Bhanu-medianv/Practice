import { Module } from '@nestjs/common';
import { FirstSvcController } from './first-svc.controller';
import { FirstSvcService } from './first-svc.service';

@Module({
  imports: [],
  controllers: [FirstSvcController],
  providers: [FirstSvcService],
})
export class FirstSvcModule {}
