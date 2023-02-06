import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
    constructor(protected readonly entityModel: Model<T>) {

    }

    async findOne(
        filter: FilterQuery<T>,
        projection?: Record<string, unknown>
    ): Promise<T | null> {
        return this.entityModel.findOne(filter).exec();
    }

    async find(
        filter: FilterQuery<T>,
        projection?: Record<string, unknown>
    ): Promise<T[] | null> {
        return this.entityModel.find(filter, projection).sort({"create_date": -1}).exec();
    }

    async create(
        createEntity: unknown
    ): Promise<T> {
        const entity = new this.entityModel(createEntity);
        return entity.save();
    }

    async update(
        filter: FilterQuery<T>,
        updateEntity: UpdateQuery<unknown>
    ): Promise<T | null> {
        return this.entityModel.findByIdAndUpdate(
            filter,
            updateEntity, 
            {
                new: true
            }
        )
    }

    async deleteMany(
        filter: FilterQuery<T>,
    ): Promise<boolean> {
        const result = await this.entityModel.deleteMany(filter);
        return result.deletedCount >= 1;
    }
}