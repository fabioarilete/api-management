import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Operation } from 'src/schemas/operation.schema';
import { OperationSchema } from 'src/schemas/operation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Operation.name, schema: OperationSchema },
    ]),
  ],
  controllers: [OperationController],
  providers: [OperationService],
})
export class OperationModule {}
