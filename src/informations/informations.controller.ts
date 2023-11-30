import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { InformationsService } from './informations.service';
import { Information } from 'src/schemas/Information.schema';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';

@Controller('informations')
export class InformationsController {
  constructor(private informationService: InformationsService) {}

  @Get()
  async getAllInformations(): Promise<Information[]> {
    return this.informationService.findAll();
  }

  @Post()
  async createInformation(
    @Body()
    information: CreateInformationDto,
  ): Promise<Information> {
    return this.informationService.create(information);
  }

  @Get(':id')
  async getInformation(
    @Param('id')
    id: string,
  ): Promise<Information> {
    return this.informationService.findById(id);
  }

  @Put(':id')
  async updateInformation(
    @Param('id')
    id: string,
    @Body()
    information: UpdateInformationDto,
  ) {
    await this.informationService.updateById(id, information);
    return { message: 'ok' };
  }

  @Delete(':id')
  async deleteInformation(
    @Param('id')
    id: string,
  ) {
    await this.informationService.deleteById(id);
    return { message: 'ok' };
  }
}
