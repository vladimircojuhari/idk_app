import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
    @Prop()
    id: string;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    phone: string;

    @Prop()
    age: number;

    @Prop()
    pin: number;

    @Prop()
    password: string;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);