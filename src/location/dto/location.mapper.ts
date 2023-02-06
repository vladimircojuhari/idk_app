import { Location } from "../entities/location.entity";
import { CreateLocationDto } from "./create-location.dto";

export class LocationMapper {
    static mapToSchema(createLocationDto: CreateLocationDto) {
        var schema = new Location();

        schema.latitude = createLocationDto.coords.latitude;
        schema.longitude = createLocationDto.coords.longitude;
        schema.speed = createLocationDto.coords.speed;
        schema.is_moving = createLocationDto.is_moving;
        schema.odometer = createLocationDto.odometer;
        schema.driver_id = createLocationDto.extras.driver_id;
        schema.route_id = createLocationDto.extras.route_id;
        
        return schema;
    }
}