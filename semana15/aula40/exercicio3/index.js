const fs = require("fs");
let list = { tarefas: [] };
// Carregando lista
let data = fs.readFileSync("./tarefas.json");
try {
  list = JSON.parse(data);
} catch (err) {
  console.log("Nenhuma lista previamente armazenada");
}

// Nova terafa
const newTask = process.argv[2];
if (newTask) {
  list.tarefas.push(newTask);
  const data = JSON.stringify(list);
  // Salvando lista
  fs.writeFile("./tarefas.json", data, function (err) {
    if (err) {
      console.log("Houve um erro");
      console.log(err.message);
      return;
    }
  });
  console.log("Tarefa adicionada com sucesso!");
} else {
  console.log(
    "Digite uma tarefa para ser adicionada à lista, seguindo o modelo: npm start 'tarefa'."
  );
}
// Exibindo lista
console.table(list);
