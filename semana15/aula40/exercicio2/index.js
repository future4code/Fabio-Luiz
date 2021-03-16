const operation = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
if (!operation || !a || !b) {
  console.log("Existem parâmetros faltando. Por favor, verifique seguindo o modelo: npm start 'operacao' 'valor-a' 'valor-b'");
} else {
  switch (operation) {
    case "add":
      console.log("\x1b[36m%s\x1b[0m", a + b);
      break;
    case "sub":
      console.log("\x1b[35m%s\x1b[0m", a - b);
      break;
    case "mult":
      console.log("\x1b[37m%s\x1b[0m", a * b);
      break;
    case "div":
      console.log("\x1b[33m%s\x1b[0m", a / b);
      break;
    default:
      console.log(
        `As operações disponíveis são: add, sub, mult, div, seguidas pelos parâmetros 'a' e 'b'`
      );
      break;
  }
}
