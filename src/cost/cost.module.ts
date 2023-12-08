import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cost, CostSchema } from 'src/schemas/cost.schema';
import { Material, MaterialSchema } from 'src/schemas/material.schema';
import { Operation, OperationSchema } from 'src/schemas/operation.schema';
import { MarkUp, MarkUpSchema } from 'src/schemas/markUp.schema';
import { Information, InformationSchema } from 'src/schemas/Information.schema';
import { CreateCostController } from './controllers/create.cost.controller';
import { FindAllCostController } from './controllers/findAll.cost.controller';
import { FindOneCostController } from './controllers/findOne.cost.controller';
import { DeleteCostController } from './controllers/delete.cost.controller';
import { UpdateCostController } from './controllers/update.cost.controller';
import { CreateCostService } from './services/create.cost.service';
import { FindAllCostService } from './services/findAll.cost.service';
import { FindOneCostService } from './services/findOne.cost.service';
import { DeleteCostService } from './services/delete.cost.service';
import { UpdateCostService } from './services/update.cost.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cost.name, schema: CostSchema },
      { name: Material.name, schema: MaterialSchema },
      { name: Operation.name, schema: OperationSchema },
      { name: MarkUp.name, schema: MarkUpSchema },
      { name: Information.name, schema: InformationSchema },
    ]),
  ],
  controllers: [
    CreateCostController,
    FindAllCostController,
    FindOneCostController,
    DeleteCostController,
    UpdateCostController,
  ],
  providers: [
    CreateCostService,
    FindAllCostService,
    FindOneCostService,
    DeleteCostService,
    UpdateCostService,
  ],
})
export class CostModule {}
