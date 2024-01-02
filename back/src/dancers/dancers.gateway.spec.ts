import { Test, TestingModule } from '@nestjs/testing';
import { DancersGateway } from './dancers.gateway';
import { DancersService } from './dancers.service';

describe('DancersGateway', () => {
  let gateway: DancersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DancersGateway, DancersService],
    }).compile();

    gateway = module.get<DancersGateway>(DancersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
