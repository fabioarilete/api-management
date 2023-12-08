import { Controller, Body, Put, Param } from '@nestjs/common';
import { UpdateCostDto } from '../dto/update-cost.dto';
import { UpdateCostService } from '../services/update.cost.service';

@Controller('costs')
export class UpdateCostController {
  constructor(private costService: UpdateCostService) {}

  @Put(':id')
  async updateCost(
    @Param('id')
    id: string,
    @Body()
    cost: UpdateCostDto,
  ) {
    await this.costService.updateById(id, cost);
    return { message: 'ok' };
  }
}
