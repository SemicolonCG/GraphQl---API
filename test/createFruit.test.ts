import FruitManupulateService from "../../GraphQl---API/src/shared/infastructure/FruitManupulateService";

import ManupulateFruitStorageUseCase from "../src/shared/application/usecase/ManupulateFruitStorageUseCase";

let cr = new FruitManupulateService();

let manupulateUsecase = new ManupulateFruitStorageUseCase(cr);

describe("Server.ts tests", () => {
  test("Math test", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Test app.ts", () => {
  test("create fruit", async () => {
    const res = await manupulateUsecase.createFruit("Grapgh", "this grapgh paragraph", 10);
    expect(res).toEqual({ message: "Allo! Catch-all route." });
  });
});