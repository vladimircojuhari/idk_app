import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Timestamp } from "rxjs";
import { RouteStatus } from "../enums/route-status.enum";

export type RouteDocument = Route & Document;

@Schema()
export class Route {
    @Prop()
    name: string;

    @Prop()
    driver_id: string;

    @Prop()
    status_id: RouteStatus;

    @Prop()
    start_date?: number;

    @Prop()
    end_date?: number;

    @Prop()
    create_date: number;

    @Prop()
    origin_address?:string;

    @Prop()
    destination_address?:string;

    @Prop()
    odometer: number;

   
}

export const RouteSchema = SchemaFactory.createForClass(Route);