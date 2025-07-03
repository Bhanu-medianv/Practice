import { Test, TestingModule } from '@nestjs/testing';
import { FirstSvcController } from './first-svc.controller';
import { FirstSvcService } from './first-svc.service';

describe('FirstSvcController', () => {
  let firstSvcController: FirstSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirstSvcController],
      providers: [FirstSvcService],
    }).compile();

    firstSvcController = app.get<FirstSvcController>(FirstSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firstSvcController.getHello()).toBe('Hello World!');
    });
  });
});
