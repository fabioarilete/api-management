import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';

@Injectable()
export class UpdateCostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,
  ) {}

  async updateById(id: string, cost: Cost): Promise<void> {
    await this.costModel.updateOne({ id }, cost);
  }
}
