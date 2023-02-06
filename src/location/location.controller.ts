import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Header } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationGateway } from './location.gateway';
import { LocationMapper } from './dto/location.mapper';
@Controller('location')
export class LocationController {

  constructor(
    private readonly locationService: LocationService, 
    private getway: LocationGateway) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationDto[]) {
    
    let schemas = createLocationDto.map(el => LocationMapper.mapToSchema(el));

    schemas.forEach(el => this.locationService.create(el));

    this.getway.sendMessage(schemas);
  }

  @Get(':driver_id/route/:route_id')
  async findAll(@Param('driver_id') driver_id: string, @Param('route_id') route_id: string) {
    return (await this.locationService.findAll( route_id, driver_id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
