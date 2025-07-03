import { Module } from '@nestjs/common';
import { ThirdSvcController } from './third-svc.controller';
import { ThirdSvcService } from './third-svc.service';

@Module({
  imports: [],
  controllers: [ThirdSvcController],
  providers: [ThirdSvcService],
})
export class ThirdSvcModule {}
