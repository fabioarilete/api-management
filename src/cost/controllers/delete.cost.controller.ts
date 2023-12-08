import { Controller, Param, Delete } from '@nestjs/common';
import { DeleteCostService } from '../services/delete.cost.service';

@Controller('costs')
export class DeleteCostController {
  constructor(private costService: DeleteCostService) {}

  @Delete(':id')
  async deleteCost(
    @Param('id')
    id: string,
  ) {
    await this.costService.deleteById(id);
    return { message: 'ok' };
  }
}
