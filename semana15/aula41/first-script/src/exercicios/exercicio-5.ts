type mathAnalysis = (
  a: number,
  b: number
) => { soma: number; subtração: number; multiplicação: number; maior: number };

const mathOperations: mathAnalysis = (a, b) => {
  return {
    soma: a + b,
    subtração: a - b,
    multiplicação: a * b,
    maior: a > b ? a : b,
  };
};
