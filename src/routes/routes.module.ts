import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Route, RouteSchema } from './entities/route.entity';
import { RoutesService } from './routes.service';
import { RoutesRepository } from './routes.repository';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService, RoutesRepository],
  imports: [MongooseModule.forFeature([
    {
      name: Route.name, schema: RouteSchema
    }
  ])]
})
export class RoutesModule { }
