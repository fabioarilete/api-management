import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Operation } from 'src/schemas/operation.schema';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { OperationService } from './operation.service';

@Controller('operations')
export class OperationController {
  constructor(private operationService: OperationService) {}

  @Get()
  async getAllOperations(): Promise<Operation[]> {
    return this.operationService.findAll();
  }

  @Post()
  async createOperation(
    @Body()
    operation: CreateOperationDto,
  ): Promise<Operation> {
    return this.operationService.create(operation);
  }

  @Get(':id')
  async getOperation(
    @Param('id')
    id: string,
  ): Promise<Operation> {
    return this.operationService.findById(id);
  }

  @Put(':id')
  async updateOperation(
    @Param('id')
    id: string,
    @Body()
    operation: UpdateOperationDto,
  ) {
    await this.operationService.updateById(id, operation);
    return { message: 'ok' };
  }

  @Delete(':id')
  async deleteOperation(
    @Param('id')
    id: string,
  ) {
    await this.operationService.deleteById(id);
    return { message: 'ok' };
  }
}
