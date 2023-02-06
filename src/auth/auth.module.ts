import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DriverService } from 'src/driver/driver.service';
import { DriverRepository } from 'src/driver/driver.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
