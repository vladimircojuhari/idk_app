import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';
import { RouteStatus } from './enums/route-status.enum';
import { RoutesRepository } from './routes.repository';

@Injectable()
export class RoutesService {
  constructor(private routesRepository: RoutesRepository) {}

  create(route: Route) {
    route.create_date = +new Date();

    return this.routesRepository.create(route);
  }

  findAll() {
    return this.routesRepository.find({});
  }

  findByDriver(driver_id: string) {
    return this.routesRepository.find({
      driver_id: driver_id,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: string, updateRoute: UpdateRouteDto) {
    this.routesRepository.update({ _id: id }, updateRoute);
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
