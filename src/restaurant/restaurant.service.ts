import { Injectable } from '@nestjs/common';
import { Restrunant } from './restaurant.entity';
import { EntityManager } from '@mikro-orm/mysql';

@Injectable()
export class RestaurantService {

    constructor(private readonly em: EntityManager) { }

    async createRestruant(RestaruntData) {
        const restarunt = this.em.create(Restrunant, RestaruntData);
        await this.em.flush();
        return restarunt;
    }

    async getAllRestraunts() {
        return this.em.find(Restrunant, {});
    }

    async getRestrauntById(id) {

        return this.em.findOne(Restrunant, { id });
    }
    async updateRestrunatById(id: number, restaruntData: Partial<Restrunant>): Promise<Restrunant> {
        const restarunt = await this.getRestrauntById(id);
        console.log(restarunt);
        if (!restarunt) {
            throw new Error(`restarunt not found with id ${id}`)
        }
        this.em.assign(restarunt, restaruntData);
        await this.em.flush();
        return restarunt;

    }

    async deleteRestaurantById(id) {
        const restarunt = await this.getRestrauntById(id);
        if (!restarunt) {
            throw new Error(`restarunt not found with id ${id}`)
        }
        this.em.remove(restarunt);
        await this.em.flush();
        return {message:`restarunt deleted with id ${id} successfully` }

    }

}
