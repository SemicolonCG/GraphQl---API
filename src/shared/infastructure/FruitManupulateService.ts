
import IManupulateFruitStorageService from "../application/services/IManupulateFruitStorageService";
import Fruits from "../domain/Fruit";
const Fruit = require('../infastructure/models/Fruit')

export default class FruitManupulateService implements IManupulateFruitStorageService {

  public async create(name: String, description: string, limit: Number): Promise<Fruits> {

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
  }
  update(name: String, description: string, limit: Number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  store(name: String, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  remove(name: String, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  delete(name: String, forceDelete: Boolean): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }


}
