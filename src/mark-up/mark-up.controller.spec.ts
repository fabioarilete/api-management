import { Test, TestingModule } from '@nestjs/testing';
import { MarkUpController } from './mark-up.controller';
import { MarkUpService } from './mark-up.service';

describe('MarkUpController', () => {
  let controller: MarkUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkUpController],
      providers: [MarkUpService],
    }).compile();

    controller = module.get<MarkUpController>(MarkUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
