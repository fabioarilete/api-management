import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InformationDocument = HydratedDocument<Information>;

@Schema({
  timestamps: true,
})
export class Information {
  @Prop()
  id: string;

  @Prop()
  cod: number;

  @Prop()
  name: string;

  @Prop()
  tabela: number;

  @Prop()
  precoMedio: number;
}

export const InformationSchema = SchemaFactory.createForClass(Information);
