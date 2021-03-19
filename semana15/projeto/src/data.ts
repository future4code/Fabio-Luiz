export enum opList {
  IN = "IN",
  OUT = "OUT",
}

export type extractType = {
  id: number;
  operation: opList;
  opValue: number;
  date: string;
  description: string;
};

export type userType = {
  id: number;
  name: string;
  cpf: number;
  birthdate: string;
  balance: number;
  extract: extractType[];
};

export let users: userType[] = [
  {
    id: 1616170408562,
    name: "José Silva",
    cpf: 98765432101,
    birthdate: "1990/02/02",
    balance: 7200.14,
    extract: [],
  },
  {
    id: 1616170408563,
    name: "João Silva",
    cpf: 12345678901,
    birthdate: "1990/01/01",
    balance: 1233.45,
    extract: [],
  },
];
