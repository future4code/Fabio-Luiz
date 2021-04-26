export interface characterDTO {
  name: string;
  health: number;
  defense: number;
  attack: number;
}

export const validateCharacter = (character: characterDTO): boolean => {
  for (const key in character) {
    if (character[key] !== false && !character[key]) {
      return false;
    }
    if (typeof character[key] === "number" && Number(character[key]) < 1) {
      return false;
    }
  }
  return true;
};
