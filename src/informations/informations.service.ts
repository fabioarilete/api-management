import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Information } from 'src/schemas/Information.schema';

@Injectable()
export class InformationsService {
  constructor(
    @InjectModel(Information.name)
    private informationModel: mongoose.Model<Information>,
  ) {}

  async findAll(): Promise<Information[]> {
    const informations = await this.informationModel.find();
    return informations;
  }

  async create(information: Information): Promise<Information> {
    const data = {
      ...information,
      id: uuidv4(),
    };
    const res = await this.informationModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Information> {
    const information = await this.informationModel.findOne({ id });

    if (!information) {
      throw new NotFoundException('Informação não encontrada!');
    }
    return information;
  }

  async updateById(id: string, information: Information): Promise<void> {
    await this.informationModel.updateOne({ id }, information);
  }

  async deleteById(id: string): Promise<void> {
    await this.informationModel.deleteOne({ id }).exec();
  }
}
