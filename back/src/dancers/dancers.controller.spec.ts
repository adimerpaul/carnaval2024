import { Test, TestingModule } from '@nestjs/testing';
import { DancersController } from './dancers.controller';

describe('DancersController', () => {
  let controller: DancersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DancersController],
    }).compile();

    controller = module.get<DancersController>(DancersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
