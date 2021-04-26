import { characterDTO, validateCharacter } from "./validateCharacter";

export const performAttack = (
  attacker: characterDTO,
  defender: characterDTO
): any => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }
  const battleResult = attacker.attack - defender.defense;
  if (battleResult > 0) {
    defender.health -= battleResult;
  }
};

export const performAttackV2 = (
  attacker: characterDTO,
  defender: characterDTO,
  validator: (character: characterDTO) => boolean
): any => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }
  const battleResult = attacker.attack - defender.defense;
  if (battleResult > 0) {
    defender.health -= battleResult;
  }
  if (defender.health < 0) {
    defender.health = 0;
  }
};

export const recoverCharacters = (
  characters: characterDTO[],
  validator: (character: characterDTO) => boolean
): characterDTO[] => {
  if (characters.length < 2) {
    throw new Error("The ritual needs 2 or more characters.");
  }
  for (const char of characters) {
    if (!validator(char)) {
      throw new Error("Invalid character");
    }
    char.health = 1500;
  }
  return characters;
};

export const increaseCharacterStrength = (
  character: characterDTO,
  newStrength: number,
  validator: (character: characterDTO) => boolean
): void => {
  if (!validator(character)) {
    throw new Error("Invalid character");
  }
  if(newStrength < character.attack) {
      throw new Error("New strength must be greater than current value.");
  }
  character.attack = newStrength
};

export const decreaseCharacterDefense = (
  character: characterDTO,
  newDefense: number,
  validator: (character: characterDTO) => boolean
): void => {
  if (!validator(character)) {
    throw new Error("Invalid character");
  }
  if (newDefense > character.defense) {
    throw new Error("New defense must be less than current value.");
  }
  character.defense = newDefense;
};


