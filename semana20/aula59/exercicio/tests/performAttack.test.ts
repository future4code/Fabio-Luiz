import {
  performAttackV2,
  recoverCharacters,
  increaseCharacterStrength,
  decreaseCharacterDefense,
} from "../src/performAttack";

// test("Creating mock - case true", () => {
//     const validatorMock = jest.fn(()=>{
//         return true
//     })
// })

// test("Creating mock - case false", () => {
//   const validatorMock = jest.fn(() => {
//     return false;
//   });
// });

describe("Testing battles", () => {
  it("Should return 200 HP less to defender", () => {
    expect.assertions(4);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 300,
    };
    let char2 = {
      name: "Dave",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    performAttackV2(char1, char2, validatorMock);

    expect(char2.health).toEqual(1300);
    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(2);
    expect(validatorMock).toReturnTimes(2);
  });

  it("Should throw Error for invalid character", () => {
    expect.assertions(4);

    const validatorMock = jest.fn(() => {
      return false;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 300,
    };
    let char2 = {
      name: "Dave",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    try {
      performAttackV2(char1, char2, validatorMock);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toBeCalled();
      expect(validatorMock).toBeCalledTimes(1);
      expect(validatorMock).toReturnTimes(1);
    }
  });

  it("Should return 0 HP less to defender", () => {
    expect.assertions(4);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    let char2 = {
      name: "Dave",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    performAttackV2(char1, char2, validatorMock);

    expect(char2.health).toEqual(1500);
    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(2);
    expect(validatorMock).toReturnTimes(2);
  });

  it("Should return 0 HP to defender", () => {
    expect.assertions(4);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 300,
    };
    let char2 = {
      name: "Dave",
      health: 100,
      defense: 100,
      attack: 100,
    };
    performAttackV2(char1, char2, validatorMock);

    expect(char2.health).toEqual(0);
    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(2);
    expect(validatorMock).toReturnTimes(2);
  });

  it("Should return 2 characters with 1500 HP", () => {
    expect.assertions(5);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 400,
      defense: 100,
      attack: 300,
    };
    let char2 = {
      name: "Dave",
      health: 1000,
      defense: 100,
      attack: 100,
    };
    const output = recoverCharacters([char1, char2], validatorMock);

    expect(output).toHaveLength(2);
    expect(output[0].health).toEqual(1500);
    expect(output[1].health).toEqual(1500);
    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(2);
  });

  it("Should throw Error because the input has just one character", () => {
    expect.assertions(2);
    const validatorMock = jest.fn(() => {
      return true;
    });
    try {
      let char1 = {
        name: "Joe",
        health: 400,
        defense: 100,
        attack: 300,
      };
      const output = recoverCharacters([char1], validatorMock);
    } catch (error) {
      expect(error.message).toBe("The ritual needs 2 or more characters.");
      expect(validatorMock).not.toBeCalled();
    }
  });

  it("Should increase characters' attack to 300", () => {
    expect.assertions(5);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    increaseCharacterStrength(char1, 300, validatorMock);

    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(1);
    expect(char1.attack).toEqual(300);
    expect(char1.health).toEqual(1500);
    expect(char1.defense).toEqual(100);
  });

  it("Should throw Error because the new attack is less than current value", () => {
    expect.assertions(3);
    const validatorMock = jest.fn(() => {
      return true;
    });
    try {
      let char1 = {
        name: "Joe",
        health: 1500,
        defense: 100,
        attack: 100,
      };
      increaseCharacterStrength(char1, 50, validatorMock);
    } catch (error) {
      expect(error.message).toBe(
        "New strength must be greater than current value."
      );
      expect(validatorMock).toBeCalled();
      expect(validatorMock).toBeCalledTimes(1);
    }
  });

  it("Should decrease characters' defense to 50", () => {
    expect.assertions(5);

    const validatorMock = jest.fn(() => {
      return true;
    });
    let char1 = {
      name: "Joe",
      health: 1500,
      defense: 100,
      attack: 100,
    };
    decreaseCharacterDefense(char1, 50, validatorMock);

    expect(validatorMock).toBeCalled();
    expect(validatorMock).toBeCalledTimes(1);
    expect(char1.attack).toEqual(100);
    expect(char1.health).toEqual(1500);
    expect(char1.defense).toEqual(50);
  });

  it("Should throw Error because the new defense is greater than current value", () => {
    expect.assertions(3);
    const validatorMock = jest.fn(() => {
      return true;
    });
    try {
      let char1 = {
        name: "Joe",
        health: 1500,
        defense: 100,
        attack: 100,
      };
      decreaseCharacterDefense(char1, 150, validatorMock);
    } catch (error) {
      expect(error.message).toBe(
        "New defense must be less than current value."
      );
      expect(validatorMock).toBeCalled();
      expect(validatorMock).toBeCalledTimes(1)
    }
  });
});
