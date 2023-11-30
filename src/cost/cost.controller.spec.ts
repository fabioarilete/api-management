import { Test, TestingModule } from '@nestjs/testing';
import { CostsController } from './cost.controller';
import { CostsService } from './cost.service';

describe('CostsController', () => {
  let controller: CostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostsController],
      providers: [CostsService],
    }).compile();

    controller = module.get<CostsController>(CostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
