import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "src/_database/common/repository/entity.repository";
import { Driver, DriverDocument } from "./entities/driver.entity";

export class DriverRepository extends EntityRepository<DriverDocument> {
    constructor(@InjectModel(Driver.name) private driverModel: Model<DriverDocument>) {
        super(driverModel);
    }
}