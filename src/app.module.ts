import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { DriverModule } from './driver/driver.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    LocationModule, 
    DriverModule,
    MongooseModule.forRoot('mongodb://localhost:27017/kinda'),
    RoutesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
