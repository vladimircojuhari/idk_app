import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { LocationGateway } from './location.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Location, LocationSchema } from './entities/location.entity';
import { LocationRepository } from './location.repository';

@Module({
  controllers: [LocationController],
  providers: [
    LocationService, 
    LocationGateway,
    LocationRepository,
  ],
  imports: [MongooseModule.forFeature([
    {
      name: Location.name, schema: LocationSchema
    }
  ])]
})
export class LocationModule { }
