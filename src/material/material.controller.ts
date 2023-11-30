import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from 'src/schemas/material.schema';

@Controller('materials')
export class MaterialController {
  constructor(private materialService: MaterialService) {}

  @Get()
  async getAllMaterials(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @Post()
  async createMaterial(
    @Body()
    material: CreateMaterialDto,
  ): Promise<Material> {
    return this.materialService.create(material);
  }

  @Get(':id')
  async getMaterial(
    @Param('id')
    id: string,
  ): Promise<Material> {
    return this.materialService.findById(id);
  }

  @Put(':id')
  async updateMaterial(
    @Param('id')
    id: string,
    @Body()
    material: UpdateMaterialDto,
  ) {
    await this.materialService.updateById(id, material);
    return { message: 'ok' };
  }

  @Delete(':id')
  async deleteMaterial(
    @Param('id')
    id: string,
  ) {
    await this.materialService.deleteById(id);
    return { message: 'ok' };
  }
}
