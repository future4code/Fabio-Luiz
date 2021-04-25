import { User, performPurchase } from "../src/performPurchase";

describe("Validating results", () => {
  test("Testing balance greater than value", () => {
    const user: User = { name: "Joe", balance: 100 };

    const result = performPurchase(user, 40);

    expect(result).toEqual({ name: "Joe", balance: 60 });
  });

  test("Testing balance equal than value", () => {
    const user: User = { name: "Joe", balance: 100 };

    const result = performPurchase(user, 100);

    expect(result).toEqual({ name: "Joe", balance: 0 });
  });

  test("Testing balance lower than value", () => {
    const user: User = { name: "Joe", balance: 100 };

    const result = performPurchase(user, 400);

    expect(result).toBeUndefined();
  });
});
