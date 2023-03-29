import Fruits from "../../domain/Fruit";
import IManupulateFruitStorageService from "../services/IManupulateFruitStorageService";

import IManupulateFruitStorageUseCase from "./IManupulateFruitStorageUseCase";

export default class ManupulateFruitStorageUseCase implements IManupulateFruitStorageUseCase {

  private ManupulateFruitStorageService: IManupulateFruitStorageService;

  constructor(ManupulateFruitStorageService: IManupulateFruitStorageService) {
    this.ManupulateFruitStorageService = ManupulateFruitStorageService;
  }
  public async createFruit( name: string, description: string, limit: Number): Promise<Fruits> {
    let fruit = await this.ManupulateFruitStorageService.create(name, description, limit)
    return fruit;
  }
  updateFruit(name: string, description: string, limit: Number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  storeFruit(name: string, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  removeFruit(name: string, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  deleteFruit(name: string, forceDelete: Boolean): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  ;



}