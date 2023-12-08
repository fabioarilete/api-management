import { Controller, Get } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';
import { FindAllCostService } from '../services/findAll.cost.service';

@Controller('costs')
export class FindAllCostController {
  constructor(private costService: FindAllCostService) {}

  @Get()
  async getAllCosts(): Promise<Cost[]> {
    return this.costService.findAll();
  }
}
