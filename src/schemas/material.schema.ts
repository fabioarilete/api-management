import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MaterialDocument = HydratedDocument<Material>;

@Schema({
  timestamps: true,
})
export class Material {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  preco: number;

  @Prop({ required: true })
  frete: number;

  @Prop({ required: true })
  icms: number;

  @Prop({ required: true })
  nf: number;

  @Prop({ required: true })
  tipoFornecedor: string;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  unid: string;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
