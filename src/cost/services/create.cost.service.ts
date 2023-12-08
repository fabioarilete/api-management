import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Cost } from 'src/schemas/cost.schema';

@Injectable()
export class CreateCostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,
  ) {}

  async create(cost: Cost): Promise<Cost> {
    const data = {
      ...cost,
      id: uuidv4(),
    };
    const res = await this.costModel.create(data);
    return res;
  }
}
