// a)
// let minhaString: string = "oi!"
// minhaString = 10
//É destacado um erro na variável, indicando que esperava-se um valor tipo string e recebeu um tipo Number

// b)
let meuNumero: number | string = 10;
meuNumero = "oi";
//Incluindo o separador |, podemos indicar mais de um tipo possível para a variável.

// c)
const obj1 = {
  nome: "José",
  idade: 32,
  corFavorita: "Branco",
};

enum corFavorita {
  Vermelho = "Vermelho",
  Laranja = "Laranja",
  Amarelo = "Amarelo",
  Verde = "Verde",
  Azul = "Azul",
  Anil = "Anil",
  Violeta = "Violeta",
}

type obj = {
  nome: string;
  idade: number;
  corFavorita: corFavorita;
};

const obj2: obj = {
  nome: 'Maria',
  idade: 31,
  corFavorita: corFavorita.Anil,
};

const obj3: obj = {
  nome: "Carlos",
  idade: 23,
  corFavorita: corFavorita.Laranja,
};

