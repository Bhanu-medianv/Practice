import { Test, TestingModule } from '@nestjs/testing';
import { SecondSvcController } from './second-svc.controller';
import { SecondSvcService } from './second-svc.service';

describe('SecondSvcController', () => {
  let secondSvcController: SecondSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondSvcController],
      providers: [SecondSvcService],
    }).compile();

    secondSvcController = app.get<SecondSvcController>(SecondSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondSvcController.getHello()).toBe('Hello World!');
    });
  });
});
