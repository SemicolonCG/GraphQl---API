import Fruits from "../../domain/Fruit";
import IManupulateFruitStorageService from "../services/IManupulateFruitStorageService";

import IManupulateFruitStorageUseCase from "./IManupulateFruitStorageUseCase";

export default class ManupulateFruitStorageUseCase implements IManupulateFruitStorageUseCase {

  private ManupulateFruitStorageService: IManupulateFruitStorageService;

  constructor(ManupulateFruitStorageService: IManupulateFruitStorageService) {
    this.ManupulateFruitStorageService = ManupulateFruitStorageService;
  }
  public async createFruit(_: any, name: string, description: string, limit: Number): Promise<Fruits> {
    let fruit = await this.ManupulateFruitStorageService.create(name, description, limit)
    return fruit;
  }
  updateFruit(_: any, name: string, description: string, limit: Number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  storeFruit(_: any, name: string, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  removeFruit(_: any, name: string, amount: Number): Promise<Fruits> {
    throw new Error("Method not implemented.");
  }
  deleteFruit(_: any, name: string, forceDelete: Boolean): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  ;



}