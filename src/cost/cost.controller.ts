import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CostService } from './cost.service';
import { Cost } from 'src/schemas/cost.schema';
import { UpdateCostDto } from './dto/update-cost.dto';
import { CreateCostDto } from './dto/create-cost.dto';

@Controller('costs')
export class CostController {
  constructor(private costService: CostService) {}

  @Get()
  async getAllCosts(): Promise<Cost[]> {
    return this.costService.findAll();
  }

  @Post()
  async createCost(
    @Body()
    cost: CreateCostDto,
  ): Promise<Cost> {
    return this.costService.create(cost);
  }

  @Get(':id')
  async getCost(
    @Param('id')
    id: string,
  ): Promise<Cost> {
    return this.costService.findById(id);
  }

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

  @Delete(':id')
  async deleteCost(
    @Param('id')
    id: string,
  ) {
    await this.costService.deleteById(id);
    return { message: 'ok' };
  }
}
