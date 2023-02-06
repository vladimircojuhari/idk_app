import { Route } from "./route.entity";
import { CreateRouteDto } from "../dto/create-route.dto";

export class RouteMapper {
    constructor() {

    }
    
    static mapToSchema(createRouteDto: CreateRouteDto) {
        let route = new Route();

        route.driver_id = createRouteDto.driver_id;
        route.status_id = createRouteDto.status_id;
        route.destination_address = createRouteDto.destination_address;
        route.origin_address = createRouteDto.origin_address;
        route.name = createRouteDto.name;
        route.start_date = createRouteDto.start_date ? +new Date(createRouteDto.start_date) : null;
        route.end_date = createRouteDto.end_date ? +new Date(createRouteDto.end_date) : null;

        return route;
    }
}
