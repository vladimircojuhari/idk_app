import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "src/_database/common/repository/entity.repository";
import { Location, LocationDocument } from "./entities/location.entity";

export class LocationRepository extends EntityRepository<LocationDocument> {
    constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>) {
        super(locationModel);
    }
}