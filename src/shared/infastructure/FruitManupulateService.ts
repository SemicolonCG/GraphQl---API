
import IManupulateFruitStorageService from "../application/services/IManupulateFruitStorageService";
import Fruits from "../domain/Fruit";
const Fruit = require('../infastructure/models/Fruit')

export default class FruitManupulateService implements IManupulateFruitStorageService {

  public async create(name: String, description: string, limit: Number): Promise<Fruits> {

    if (description.length > 500) {
      throw new Error("Description characters must be less than 500");
    }
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
  public async update(name: String, description: string, limit: Number): Promise<Boolean> {

    if (description.length > 500) {
      throw new Error("Description characters must be less than 500");
    }
    const wasEdited = (await Fruit.updateOne({ name: name }, { description: description, limit: limit })).modifiedCount;
    return wasEdited;
  }

  public async store(name: String, amount: Number): Promise<Fruits> {

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
  }
  public async remove(name: String, amount: Number): Promise<Fruits> {
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
  }
  public async delete(name: String, forceDelete: Boolean): Promise<Boolean> {
    if (forceDelete == true) {
      const wasDeleted = (await Fruit.deleteOne({ name: name })).deletedCount;
      return wasDeleted;
    }
    return false;
  }


}
