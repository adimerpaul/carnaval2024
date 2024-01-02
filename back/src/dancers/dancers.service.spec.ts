import { Test, TestingModule } from '@nestjs/testing';
import { DancersService } from './dancers.service';

describe('DancersService', () => {
  let service: DancersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DancersService],
    }).compile();

    service = module.get<DancersService>(DancersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
