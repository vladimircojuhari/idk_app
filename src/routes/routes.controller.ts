import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteMapper } from './entities/route.mapper';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly routesService: RoutesService
  ) { 
    
  }

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    
    let route = RouteMapper.mapToSchema(createRouteDto);

    let result = await this.routesService.create(route);

    return result.id;
  }

  @Get()
  async findAll() {
    let routes = await this.routesService.findAll();
    return routes;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: CreateRouteDto) {
    console.log(updateRouteDto)
    return this.routesService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}
