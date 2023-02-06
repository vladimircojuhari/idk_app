import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "src/_database/common/repository/entity.repository";
import { Route, RouteDocument } from "./entities/route.entity";

export class RoutesRepository extends EntityRepository<RouteDocument> {
    constructor(@InjectModel(Route.name) private roouteModel: Model<RouteDocument>) {
        super(roouteModel);
    }
}