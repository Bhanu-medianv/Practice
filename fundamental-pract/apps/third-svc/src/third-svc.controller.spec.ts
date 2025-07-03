import { Test, TestingModule } from '@nestjs/testing';
import { ThirdSvcController } from './third-svc.controller';
import { ThirdSvcService } from './third-svc.service';

describe('ThirdSvcController', () => {
  let thirdSvcController: ThirdSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThirdSvcController],
      providers: [ThirdSvcService],
    }).compile();

    thirdSvcController = app.get<ThirdSvcController>(ThirdSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(thirdSvcController.getHello()).toBe('Hello World!');
    });
  });
});
