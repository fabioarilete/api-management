import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';

@Injectable()
export class DeleteCostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,
  ) {}

  async deleteById(id: string): Promise<void> {
    await this.costModel.deleteOne({ id }).exec();
  }
}
