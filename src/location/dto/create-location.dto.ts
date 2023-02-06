import { Location } from "../entities/location.entity";

export class CreateLocationDto {
    coords: Coords;
    odometer: number;
    is_moving: boolean;
    extras: Extrass
}

class Coords {
    speed: number;
    longitude: number;
    latitude: number;
}

class Extrass {
    driver_id: string;
    route_id: string;
}


