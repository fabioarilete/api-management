import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Material } from 'src/schemas/material.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name)
    private materialModel: mongoose.Model<Material>,
  ) {}

  async findAll(): Promise<Material[]> {
    const materials = await this.materialModel.find();
    return materials;
  }

  async create(material: Material): Promise<Material> {
    const data = {
      ...material,
      id: uuidv4(),
    };
    const res = await this.materialModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Material> {
    const material = await this.materialModel.findOne({ id });

    if (!material) {
      throw new NotFoundException('Material não encontrado!');
    }
    return material;
  }

  async updateById(id: string, material: Material): Promise<void> {
    await this.materialModel.updateOne({ id }, material);
  }

  async deleteById(id: string): Promise<void> {
    await this.materialModel.deleteOne({ id }).exec();
  }
}
