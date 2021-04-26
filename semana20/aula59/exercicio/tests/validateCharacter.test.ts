import { validateCharacter } from "../src/validateCharacter";

describe("testing character validation", () => {
    it("Should return false for empty name", () => {
      const char = {
        name: "",
        health: 1500,
        defense: 100,
        attack: 100,
      };
      const output = validateCharacter(char);

      expect(output).toBe(false);
    });

    it("Should return false for health equal to zero", () => {
      const char = {
        name: "Joe",
        health: 0,
        defense: 100,
        attack: 100,
      };
      const output = validateCharacter(char);

      expect(output).toBe(false);
    });

    it("Should return false for attack equal to zero", () => {
      const char = {
        name: "Joe",
        health: 1500,
        defense: 100,
        attack: 0,
      };
      const output = validateCharacter(char);

      expect(output).toBe(false);
    });

    it("Should return false for defense equal to zero", () => {
      const char = {
        name: "Joe",
        health: 1500,
        defense: 0,
        attack: 100,
      };
      const output = validateCharacter(char);

      expect(output).toBe(false);
    });

    it("Should return false for negative values", () => {
      const char = {
        name: "Joe",
        health: 1500,
        defense: 100,
        attack: -100,
      };
      const output = validateCharacter(char);

      expect(output).toBe(false);
    });

    it("Should return true for correct input", () => {
      const char = {
        name: "Joe",
        health: 1500,
        defense: 100,
        attack: 100,
      };
      const output = validateCharacter(char);

      expect(output).toBe(true);
    });
})