import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
    
    @Prop()
    driver_id: string;

    @Prop()
    route_id: string;

    @Prop()
    latitude: number;

    @Prop()
    longitude: number;

    @Prop()
    is_moving: boolean;

    @Prop()
    odometer: number;

    @Prop()
    speed: number;   
}


export const LocationSchema = SchemaFactory.createForClass(Location);