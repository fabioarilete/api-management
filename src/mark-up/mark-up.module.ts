import { Module } from '@nestjs/common';
import { MarkUpService } from './mark-up.service';
import { MarkUpController } from './mark-up.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkUp, MarkUpSchema } from 'src/schemas/markUp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MarkUp.name, schema: MarkUpSchema }]),
  ],
  controllers: [MarkUpController],
  providers: [MarkUpService],
})
export class MarkUpModule {}
