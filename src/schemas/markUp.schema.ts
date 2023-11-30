import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarkUpDocument = HydratedDocument<MarkUp>;

@Schema({
  timestamps: true,
})
export class MarkUp {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  impostos: string;

  @Prop()
  comissao: string;

  @Prop()
  adm: string;

  @Prop()
  frete: string;

  @Prop()
  financeiro: string;

  @Prop()
  marketing: string;

  @Prop()
  promotores: string;

  @Prop()
  bonificacoes: string;

  @Prop()
  lucro: string;

  @Prop()
  coeficiente: number;
}

export const MarkUpSchema = SchemaFactory.createForClass(MarkUp);
