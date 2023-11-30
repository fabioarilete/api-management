import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MarkUp } from 'src/schemas/markUp.schema';

@Injectable()
export class MarkUpService {
  constructor(
    @InjectModel(MarkUp.name)
    private markUpModel: mongoose.Model<MarkUp>,
  ) {}

  async findAll(): Promise<MarkUp[]> {
    const markUps = await this.markUpModel.find();
    return markUps;
  }

  async create(markUp: MarkUp): Promise<MarkUp> {
    const data = {
      ...markUp,
      id: uuidv4(),
    };
    const res = await this.markUpModel.create(data);
    return res;
  }

  async findById(id: string): Promise<MarkUp> {
    const markUp = await this.markUpModel.findOne({ id });

    if (!markUp) {
      throw new NotFoundException('MarkUp não encontrado!');
    }
    return markUp;
  }

  async updateById(id: string, markUp: MarkUp): Promise<void> {
    await this.markUpModel.updateOne({ id }, markUp);
  }

  async deleteById(id: string): Promise<void> {
    await this.markUpModel.deleteOne({ id }).exec();
  }
}
