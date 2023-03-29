import FindFruitUseCase from "../application/usecase/FindFruitUseCase";
import ManupulateFruitStorageUseCase from "../application/usecase/ManupulateFruitStorageUseCase";
import FruitManupulateService from "../infastructure/FruitManupulateService";

import FruitRepository from "../infastructure/FruitRepository";

const Fruit = require('../infastructure/models/Fruit');

let fr = new FruitRepository();
let cr = new FruitManupulateService();

let findFruitUseCase = new FindFruitUseCase(fr);
let manupulateUsecase = new ManupulateFruitStorageUseCase(cr);

module.exports = {
    Query: {
        async findFruit(_, { name }) {
            return findFruitUseCase.findFruit(_, name);
        },

    },
    Mutation: {
        async storeFruitToFruitStorage(_, { name, amount }) {
            const storeFruit = new Fruit({
                name: name,
                amount: amount,
                createdAt: new Date().toISOString(),
            });

            const res = await storeFruit.save();

            return {
                id: res.id,
                ...res._doc
            };
        },
        async removeFruitFromFruitStorage(_, { name, amount }) {
            const storeFruit = new Fruit({
                name: name,
                amount: amount,
                updatedAt: new Date().toISOString(),
            });
            const res = await storeFruit.save();

            return {
                id: res.id,
                ...res._doc
            };
        },
        async createFruitForFruitStorage(_, { name, description, limit }) {

            return manupulateUsecase.createFruit(_, name, description, limit)
        },
        async updateFruitForFruitStorage(_, { name, description, limit }) {

            const wasEdited = (await Fruit.updateOne({ name: name }, { description: description, limit: limit })).modifiedCount;
            return wasEdited;
        },
        async deleteFruitFromFruitStorage(_, { name, forceDelete }) {

            if (forceDelete == true) {
                const wasDeleted = (await Fruit.deleteOne({ name: name })).deletedCount;
                return wasDeleted;
            }
            return false;
        },






    }
};

async function findFruitById(ID: string): Promise<any> {
    return await Fruit.findById(ID);
}