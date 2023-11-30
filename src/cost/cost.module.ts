import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cost, CostSchema } from 'src/schemas/cost.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostSchema }]),
  ],
  controllers: [CostController],
  providers: [CostService],
})
export class CostModule {}
