import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Cost } from 'src/schemas/cost.schema';

@Injectable()
export class CostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,
  ) {}

  async findAll(): Promise<Cost[]> {
    const costs = await this.costModel.find();
    return costs;
  }

  async create(cost: Cost): Promise<Cost> {
    const data = {
      ...cost,
      id: uuidv4(),
    };
    const res = await this.costModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Cost> {
    const cost = await this.costModel.findOne({ id });

    if (!cost) {
      throw new NotFoundException('Custo não encontrado!');
    }
    return cost;
  }

  async updateById(id: string, cost: Cost): Promise<void> {
    await this.costModel.updateOne({ id }, cost);
  }

  async deleteById(id: string): Promise<void> {
    await this.costModel.deleteOne({ id }).exec();
  }
}
