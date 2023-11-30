import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MarkUpService } from './mark-up.service';
import { MarkUp } from 'src/schemas/markUp.schema';
import { CreateMarkUpDto } from './dto/create-mark-up.dto';
import { UpdateMarkUpDto } from './dto/update-mark-up.dto';

@Controller('markUps')
export class MarkUpController {
  constructor(private markUpService: MarkUpService) {}

  @Get()
  async getAllMarkUps(): Promise<MarkUp[]> {
    return this.markUpService.findAll();
  }

  @Post()
  async createMarkUp(
    @Body()
    markUp: CreateMarkUpDto,
  ): Promise<MarkUp> {
    return this.markUpService.create(markUp);
  }

  @Get(':id')
  async getMarkUp(
    @Param('id')
    id: string,
  ): Promise<MarkUp> {
    return this.markUpService.findById(id);
  }

  @Put(':id')
  async updateMarkUp(
    @Param('id')
    id: string,
    @Body()
    markUp: UpdateMarkUpDto,
  ) {
    await this.markUpService.updateById(id, markUp);
    return { message: 'ok' };
  }

  @Delete(':id')
  async deleteMarkUp(
    @Param('id')
    id: string,
  ) {
    await this.markUpService.deleteById(id);
    return { message: 'ok' };
  }
}
