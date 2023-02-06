import { Injectable } from '@nestjs/common';
import { DriverRepository } from './driver.repository';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';



@Injectable()
export class DriverService {

  constructor(private readonly driverRepository: DriverRepository) {

  }

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepository.create(createDriverDto);
  }

  findAll() {
    return this.driverRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} driver`;
  }

  update(id: string, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: string) {
    return this.driverRepository.deleteMany({
      _id: id
    })
  }

  findBy(args: object) {
    return this.driverRepository.findOne(args);
  }
}
