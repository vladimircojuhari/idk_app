import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { DriverModule } from './driver/driver.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    LocationModule,
    DriverModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.CONNECTION_STRING,
      }),
    }),
    RoutesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
