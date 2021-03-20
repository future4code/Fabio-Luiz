type stdProd = {
  nome: string;
  custo: number;
  preco: number;
  ingredientes: string[];
};
type stdSales = {
  nome: string;
  preco: number;
  cliente: string;
};

let cardapio: stdProd[] = [];
let pedidos: stdSales[] = [];

const fs = require("fs");

const loadData = () => {
  const data = fs.readFileSync("./json/cardapio.json");
  cardapio = JSON.parse(data);
  try {
    cardapio = JSON.parse(data);
  } catch (err) {
    console.log("parse error");
  }
};

const loadOrders = () => {
  const data = fs.readFileSync("./json/pedidos.json");
  pedidos = JSON.parse(data);
  try {
    pedidos = JSON.parse(data);
  } catch (err) {
    console.log("parse error");
  }
};

const saveData = () => {
  const data = JSON.stringify(cardapio);
  fs.writeFile("./json/cardapio.json", data, function (err: any) {
    if (err) {
      console.log(err.message);
      return;
    }
  });
};

const saveOrders = () => {
  const data = JSON.stringify(pedidos);
  fs.writeFile("./json/pedidos.json", data, function (err: any) {
    if (err) {
      console.log(err.message);
      return;
    }
  });
};

const addItem = (
  nome: string,
  custo: number,
  preco: number,
  ingredientes: string[]
) => {
  loadData();
  const newItem = {
    nome,
    custo,
    preco,
    ingredientes,
  };
  cardapio.push(newItem);
  saveData();
  console.table(cardapio);
};

const showPrice = (produto: string) => {
  loadData();
  const items = cardapio.filter((menuItem: any) => {
    return menuItem.nome
      .toLocaleLowerCase()
      .includes(produto.toLocaleLowerCase());
  });
  const result = items.map((item: any) => {
    return { nome: item.nome, preco: item.preco };
  });
  console.table(result);
};

const addOrder = (prato: string, cliente: string) => {
  loadData();
  loadOrders();
  const item = cardapio.filter((it: any) => {
    return it.nome === prato;
  });
  const newOrder = { nome: item[0].nome, preco: item[0].preco, cliente };
  pedidos.push(newOrder);
  console.log(newOrder);
  saveOrders();
};

const profit = () => {
  loadData();
  loadOrders();
  let despesa = 0;
  cardapio.forEach((it) => {
    despesa += it.custo;
  });
  let receita = 0;
  pedidos.forEach((it) => {
    receita += it.preco;
  });
  const lucro = receita - despesa;
  console.log("Lucro: R$", lucro);
  return lucro;
};

// a)
// addItem("frango frito", 15, 25, ["frango", "pimenta", "crosta de cheetos"]);

// b)
// showPrice("hamburguer");

// c)
// addOrder('hamburguer', "Maria")

// d)
// profit()
