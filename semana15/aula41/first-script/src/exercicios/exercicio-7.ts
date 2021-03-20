enum type {
  VERAO = "VerAo",
  INVERNO = "Inverno",
  BANHO = "Banho",
  INTIMAS = "Intimas",
}

enum discount {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMAS = 0.07,
}

type prod = {
  nome: string;
  preco: number;
  tipo: type;
  precoComDesconto?: number;
};

const produtos = [
  {
    nome: "Sunga",
    preco: 35,
    tipo: type.BANHO,
  },
  {
    nome: "Casaco",
    preco: 245,
    tipo: type.INVERNO,
  },
  {
    nome: "Camiseta",
    preco: 25,
    tipo: type.VERAO,
  },
];

const totalPrice = (products: prod[]) => {
  let newArr = [...products];
  newArr.forEach((product) => {
    switch (product.tipo) {
      case type.BANHO:
        product.precoComDesconto = product.preco * (1 - discount.BANHO);
        break;
      case type.INTIMAS:
        product.precoComDesconto = product.preco * (1 - discount.INTIMAS);
        break;
      case type.INVERNO:
        product.precoComDesconto = product.preco * (1 - discount.INVERNO);
        break;
      case type.VERAO:
        product.precoComDesconto = product.preco * (1 - discount.VERAO);
        break;
    }
  });
  console.table(newArr);
};

totalPrice(produtos);
