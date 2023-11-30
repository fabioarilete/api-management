import { Module } from '@nestjs/common';
import { Information, InformationSchema } from 'src/schemas/Information.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InformationsController } from './informations.controller';
import { InformationsService } from './informations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Information.name, schema: InformationSchema },
    ]),
  ],
  controllers: [InformationsController],
  providers: [InformationsService],
})
export class InformationsModule {}
