import Fruits from "../../domain/Fruit";

export default interface IFindFruitUseCase {
  findFruit(_,name: string): Promise<Fruits>;
}