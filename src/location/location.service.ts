import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationService {

  constructor(private readonly locationRepository: LocationRepository) {

  }

  create(location: Location) {
    return this.locationRepository.create(location);
  }

  findAll(route_id: string, driver_id:string) {
    return this.locationRepository.find({route_id: route_id.toString(), driver_id: driver_id.toString()});
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
