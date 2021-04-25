import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/casino";

describe("EX4", () => {
  test("1 brazilian allowed in BR", () => {
    const user: User = {
      name: "João",
      age: 18,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "A",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.brazilians.allowed).toEqual(['João']);
  });

  test("1 american allowed in BR", () => {
    const user: User = {
      name: "John",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "B",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.americans.allowed).toEqual(["John"]);
  });

  test("2 american and 2 brazilians unallowed in US", () => {
    const users: User[] = [
      {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Mary",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];

    const casino: Casino = {
      name: "A",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);

    expect(result.americans.allowed).toEqual([]);
    expect(result.brazilians.allowed).toEqual([]);
  });

  test("2 american allowed and 2 brazilians unallowed in US", () => {
    const users: User[] = [
      {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Mary",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];

    const casino: Casino = {
      name: "A",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);

    expect(result.americans.allowed).toEqual(["John", "Mary"]);
    expect(result.brazilians.unallowed).toEqual(["João", "Maria"]);
  });
});

describe("EX5", () => {
  test("1 brazilian allowed in BR", () => {
    const user: User = {
      name: "João",
      age: 18,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "A",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.brazilians.allowed.length).toBeLessThan(2)
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("1 american allowed in BR", () => {
    const user: User = {
      name: "John",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "B",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.americans.unallowed.length).toEqual(0);
  });

  test("2 american and 2 brazilians unallowed in US", () => {
    const users: User[] = [
      {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Mary",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];

    const casino: Casino = {
      name: "A",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);

    expect(result.americans.unallowed).toContain("John");
    expect(result.brazilians.unallowed).toContain("João");
  });

  test("2 american allowed and 2 brazilians unallowed in US", () => {
    const users: User[] = [
      {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Mary",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];

    const casino: Casino = {
      name: "A",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toEqual(2);
  });
})
