import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { DriverAuthDto } from './dto/driver-auth.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) { }

  @Post()
  async create(@Body() createDriverDto: CreateDriverDto) {
    let result = await this.driverService.create(createDriverDto);

    return {
      id: result._id
    }
  }

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    let result = await this.driverService.remove(id);

    if (!result) {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('auth')
  @HttpCode(200)
  async auth(@Body() args: DriverAuthDto) {
    let driver = await this.driverService.findBy(args);

    if (driver == null) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return {
      driver_id: driver._id
    };
  }
}
