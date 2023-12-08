import { Controller, Get, Param } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';
import { FindOneCostService } from '../services/findOne.cost.service';

@Controller('costs')
export class FindOneCostController {
  constructor(private costService: FindOneCostService) {}

  @Get(':id')
  async getCost(
    @Param('id')
    id: string,
  ): Promise<Cost> {
    return this.costService.findById(id);
  }
}
