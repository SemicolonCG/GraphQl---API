
import Fruits from "../../domain/Fruit";

export default interface IManupulateFruitStorageUseCase {
  createFruit( name: string, description: string, limit: Number): Promise<Fruits>;
  updateFruit(name: string, description: string, limit: Number): Promise<Boolean>;
  storeFruit(name: string, amount: Number): Promise<Fruits>;
  removeFruit(name: string, amount: Number): Promise<Fruits>;
  deleteFruit(name: string, forceDelete: Boolean): Promise<Boolean>;
}