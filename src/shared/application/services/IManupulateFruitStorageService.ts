import Fruits from "../../domain/Fruit";

export default interface IManupulateFruitStorageService {
  create(name: String, description: string, limit: Number): Promise<Fruits>;
  update(name: String, description: string, limit: Number): Promise<Boolean>;
  store(name: String, amount: Number): Promise<Fruits>;
  remove(name: String, amount: Number): Promise<Fruits>;
  delete(name: String, forceDelete: Boolean): Promise<Boolean>;
}