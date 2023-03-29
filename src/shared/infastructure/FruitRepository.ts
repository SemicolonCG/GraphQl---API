import IFruitReadOnlyRepository from "../application/repositories/IFruitReadOnlyRepository";
import Fruits from "../domain/Fruit";
const Fruit = require('../infastructure/models/Fruit')

export default class FruitRepository implements IFruitReadOnlyRepository {

  public async fetches(name: String): Promise<Fruits> {
    return await Fruit.findOne({ name: name })
  }
}



