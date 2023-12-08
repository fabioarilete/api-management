import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';

@Injectable()
export class FindAllCostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,
  ) {}

  async findAll(): Promise<Cost[]> {
    const costs = await this.costModel.find();
    return costs;
  }
}
