import Fruits from "../../domain/Fruit";

export default interface IFruitReadOnlyRepository {
  fetches(name: String): Promise<Fruits>;
}