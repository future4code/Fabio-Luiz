// como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R.: Utilizamos process.argv[index] para passar os parâmetros, contrando a partir do índice 2.
const user_name = process.argv[2];
const age = process.argv[3];
if (!user_name || !age) {
  console.log(
    "Existem parâmetros faltando. Por favor, verifique seguindo o modelo: npm start 'nome' 'idade'."
  );
} else {
  console.log("\x1b[33m%s\x1b[0m", `Olá ${user_name}! Você tem ${age} anos.`);
  console.log(
    "\x1b[34m%s\x1b[0m",
    `Olá ${user_name}! Você tem ${age} anos. Em sete anos você terá ${
      Number(age) + 7
    } anos.`
  );
}
