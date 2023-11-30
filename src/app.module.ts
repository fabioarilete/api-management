import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';
import { OperationModule } from './operation/operation.module';
import { MarkUpModule } from './mark-up/mark-up.module';
import { InformationsModule } from './informations/informations.module';
import { CostModule } from './cost/cost.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.CONNECTION_MONGODB),
    MaterialModule,
    OperationModule,
    MarkUpModule,
    InformationsModule,
    CostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
