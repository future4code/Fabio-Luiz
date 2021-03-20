import { fatorial } from "./exercicios/exercicio-11";

const anagramsAmount = (word: string) => {
  // Convertendo a string em array
  const arr = word.toLocaleLowerCase().split("").sort();

  // Retirando as letras repetidas e criando um array só com uma aparição de cada letra
  let unique = [arr[1]];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] !== arr[i - 1]) {
      unique.push(arr[i]);
    }
  }

  let repeated = [];
  let nTimes = 0;
  
  // Contando quantas vezes as letras se repetem e montando um array com cada quantidade de repetições
  for (let i = 0; i < unique.length; i++) {
    nTimes = arr.filter((it) => {
      return it === unique[i];
    }).length;
    repeated.push(nTimes);
  }

  // Calculando permutações
  const parcel1 = fatorial(arr.length);
  const parcel2 = repeated.reduce((acc, n)=>{return acc * fatorial(n)},1)
  const result = parcel1/parcel2
  
  console.log(`Anagramas de ${word}: ${result}`)
  return result
};

anagramsAmount("anagrama");
