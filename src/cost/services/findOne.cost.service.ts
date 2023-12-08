import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Cost } from 'src/schemas/cost.schema';
import { Material } from 'src/schemas/material.schema';
import { Operation } from 'src/schemas/operation.schema';
import { MarkUp } from 'src/schemas/markUp.schema';
import { Information } from 'src/schemas/Information.schema';

@Injectable()
export class FindOneCostService {
  constructor(
    @InjectModel(Cost.name)
    private costModel: mongoose.Model<Cost>,

    @InjectModel(Material.name)
    private costMaterial: mongoose.Model<Material>,

    @InjectModel(Operation.name)
    private costOperation: mongoose.Model<Operation>,

    @InjectModel(MarkUp.name)
    private costMarkUp: mongoose.Model<MarkUp>,

    @InjectModel(Information.name)
    private costInformation: mongoose.Model<Information>,
  ) {}

  async findById(id: string): Promise<Cost> {
    const cost = await this.costModel.findOne({ id });

    const materials = [];

    for (const material of cost.materialsProduct) {
      const _material = await this.costMaterial
        .findOne({ id: material.id })
        .exec();
      if (!material) {
        throw new NotFoundException('Material não encontrado');
      }

      materials.push({
        ...material,
        ..._material.toJSON(),
      });
    }

    cost.materialsProduct = materials;

    const operations = [];

    for (const operation of cost.operationsProduct) {
      const _operation = await this.costOperation
        .findOne({ id: operation.id })
        .exec();

      if (!operation) {
        throw new NotFoundException('Operação não encontrada');
      }

      operations.push({
        ...operation,
        ..._operation.toJSON(),
      });
    }

    cost.operationsProduct = operations;

    const markUp = await this.costMarkUp
      .findOne({ id: cost.markUpProduct?.id })
      .exec();
    if (!markUp) {
      throw new NotFoundException('Mark Up não encontrado');
    }
    cost.markUpProduct = markUp.toJSON();

    const information = await this.costInformation
      .findOne({ cod: cost.informationsProduct.cod })
      .exec();
    if (!information) {
      throw new NotFoundException('Informação não encontrada');
    }
    cost.informationsProduct = information.toJSON();

    if (!cost) {
      throw new NotFoundException('Custo não encontrado!');
    }
    return cost;
  }
}
