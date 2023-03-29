
import Fruits from "../../domain/Fruit";

export default interface IManupulateFruitStorageUseCase {
  createFruit(_, name: string, description: string, limit: Number): Promise<Fruits>;
  updateFruit(_, name: string, description: string, limit: Number): Promise<Boolean>;
  storeFruit(_, name: string, amount: Number): Promise<Fruits>;
  removeFruit(_, name: string, amount: Number): Promise<Fruits>;
  deleteFruit(_, name: string, forceDelete: Boolean): Promise<Boolean>;
}