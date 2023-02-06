import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from './entities/driver.entity';
import { DriverRepository } from './driver.repository';

@Module({
  controllers: [DriverController],
  providers: [DriverService, DriverRepository],
  imports: [MongooseModule.forFeature([
    {
      name: Driver.name, schema: DriverSchema
    }
  ])]
})
export class DriverModule { }
