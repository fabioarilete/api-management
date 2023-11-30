import { Test, TestingModule } from '@nestjs/testing';
import { MarkUpService } from './mark-up.service';

describe('MarkUpService', () => {
  let service: MarkUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkUpService],
    }).compile();

    service = module.get<MarkUpService>(MarkUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
