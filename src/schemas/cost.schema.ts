import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Information } from './Information.schema';
import { MarkUp } from './markUp.schema';

export type CostDocument = HydratedDocument<Cost>;

interface CostMaterial {
  id: string;
  obs: string;
  qt: string;
  totalItemMaterial: number;
}

interface CostOperation {
  id: string;
  obs: string;
  qt: string;
  cav: string;
  ciclo: string;
  totalItemOperation: number;
}

@Schema({
  timestamps: true,
})
export class Cost {
  @Prop()
  id: string;

  @Prop()
  cod: string;

  @Prop()
  name: string;

  @Prop()
  unid: string;

  @Prop()
  qt: string;

  @Prop()
  tipoProduto: string;

  @Prop()
  sf_st: string;

  @Prop()
  materialsProduct: CostMaterial[];

  @Prop()
  operationsProduct: CostOperation[];

  @Prop()
  informationsProduct: Information;

  @Prop()
  totalMaterials: number;

  @Prop()
  totalOperations: number;

  @Prop()
  markUpProduct: MarkUp;

  @Prop()
  unitCost: number;

  @Prop()
  totalCost: number;
}

export const CostSchema = SchemaFactory.createForClass(Cost);
