import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
