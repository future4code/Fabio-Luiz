function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// a)
//ENTRADAS: numeros (array)
//SAÍDAS: estatisticas (objeto)

// b)
// numerosOrdenados: number, 
// soma: number,
// estatisticas = {
//   maior: number,
//   menor: number,
//   media: number,
// };

// c)
type amostra = {
		numeros: number[],
		obterEstatisticas: (numeros:number[]) => {}
}

const amostraDeIdades: amostra = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas,
};
