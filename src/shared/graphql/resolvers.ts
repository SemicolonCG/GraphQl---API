import FindFruitUseCase from "../application/usecase/FindFruitUseCase";
import FruitRepository from "../infastructure/FruitRepository";

const Fruit = require('../models/Fruit')

let fr = new FruitRepository();

let findFruitUseCase = new FindFruitUseCase(fr);

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
            })

            const res = await storeFruit.save()

            return {
                id: res.id,
                ...res._doc
            }
        },
        async removeFruitFromFruitStorage(_, { name, amount }) {
            const storeFruit = new Fruit({
                name: name,
                amount: amount,
                updatedAt: new Date().toISOString(),
            })
            const res = await storeFruit.save()

            return {
                id: res.id,
                ...res._doc
            }
        },
        async createFruitForFruitStorage(_, { name, description, limit }) {

            const storeFruit = new Fruit({
                name: name,
                description: description,
                limit: limit,
                createdAt: new Date().toISOString(),
            })

            const res = await storeFruit.save()

            return {
                id: res.id,
                ...res._doc
            }
        },
        async updateFruitForFruitStorage(_, { name, description, limit }) {

            const wasEdited = (await Fruit.updateOne({ name: name }, { description: description, limit: limit })).modifiedCount
            return wasEdited
        },
        async deleteFruitFromFruitStorage(_, { name, forceDelete }) {

            if (forceDelete == true) {
                const wasDeleted = (await Fruit.deleteOne({ name: name })).deletedCount
                return wasDeleted
            }
            return false;
        },






    }
}

async function findFruitById(ID: string): Promise<any> {
    return await Fruit.findById(ID)
}