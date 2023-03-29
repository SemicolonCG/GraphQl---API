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
            return manupulateUsecase.storeFruit(name, amount);
        },
        async removeFruitFromFruitStorage(_, { name, amount }) {
            return manupulateUsecase.removeFruit(name, amount);
        },
        async createFruitForFruitStorage(_, { name, description, limit }) {

            return manupulateUsecase.createFruit(name, description, limit)
        },
        async updateFruitForFruitStorage(_, { name, description, limit }) {

            return manupulateUsecase.updateFruit(name, description, limit)
        },
        async deleteFruitFromFruitStorage(_, { name, forceDelete }) {
            return manupulateUsecase.deleteFruit(name, forceDelete);
        },

    }
};

async function findFruitById(ID: string): Promise<any> {
    return await Fruit.findById(ID);
}