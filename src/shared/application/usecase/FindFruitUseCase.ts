import Fruits from "../../domain/Fruit";

import IFruitReadOnlyRepository from "../repositories/IFruitReadOnlyRepository";
import IFindFruitUseCase from "./IFindFruitUseCase";

export default class FindFruitUseCase implements IFindFruitUseCase {

  private fruitReadOnlyRepository: IFruitReadOnlyRepository;

  constructor(fruitReadOnlyRepository: IFruitReadOnlyRepository) {
    this.fruitReadOnlyRepository = fruitReadOnlyRepository;
  };

  public async findFruit(_: any, name: string): Promise<Fruits> {
    let fruit = await this.fruitReadOnlyRepository.fetches(name)
    return fruit;
  }
  ;


}
