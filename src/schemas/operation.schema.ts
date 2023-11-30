import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OperationDocument = HydratedDocument<Operation>;

@Schema({
  timestamps: true,
})
export class Operation {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  unid: string;

  @Prop()
  tipoOperation: string;
}

export const OperationSchema = SchemaFactory.createForClass(Operation);
