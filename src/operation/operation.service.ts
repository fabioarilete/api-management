import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Operation } from 'src/schemas/operation.schema';

@Injectable()
export class OperationService {
  constructor(
    @InjectModel(Operation.name)
    private operationModel: mongoose.Model<Operation>,
  ) {}

  async findAll(): Promise<Operation[]> {
    const operations = await this.operationModel.find();
    return operations;
  }

  async create(operation: Operation): Promise<Operation> {
    const data = {
      ...operation,
      id: uuidv4(),
    };
    const res = await this.operationModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Operation> {
    const operation = await this.operationModel.findOne({ id });

    if (!operation) {
      throw new NotFoundException('Operação não encontrada!');
    }
    return operation;
  }

  async updateById(id: string, operation: Operation): Promise<void> {
    await this.operationModel.updateOne({ id }, operation);
  }

  async deleteById(id: string): Promise<void> {
    await this.operationModel.deleteOne({ id }).exec();
  }
}
