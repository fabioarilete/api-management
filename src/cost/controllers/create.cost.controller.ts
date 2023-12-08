import { Controller, Post, Body } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';
import { CreateCostDto } from '../dto/create-cost.dto';
import { CreateCostService } from '../services/create.cost.service';

@Controller('costs')
export class CreateCostController {
  constructor(private costService: CreateCostService) {}

  @Post()
  async createCost(
    @Body()
    cost: CreateCostDto,
  ): Promise<Cost> {
    return this.costService.create(cost);
  }
}
