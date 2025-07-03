import { Injectable } from '@nestjs/common';

@Injectable()
export class ThirdSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
