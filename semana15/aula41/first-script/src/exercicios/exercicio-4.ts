type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// a) A transpilação seria feita com o comando: tsc ./exercicios/exercicio-4.ts
// b) Se estivesse na pasta src, o pocedimento seria o mesmo pois apenas o index.ts está sinalizado em package.json para transpilação direta.
// c) para transpilar múltiplos arquivos precisamos do comando 'cd pasta-com-arquivo' e em seguida 'tsc arquivo1.ts arquivo2.ts' ou apenas tsc para transpilar todos os arquivos .ts na pasta.
// d) As diferenças encontradas são:
   // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
   // "removeComments": true,                      /* Do not emit comments to output. */
   // "outDir": "./",                              /* Redirect output structure to the directory. */
   // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
   // "sourceMap": true,                           /* Generates corresponding '.map' file. */
   //  O que chamou atenção foi a propriedade "noImplicitAny" pois impede que seja aceita a declaração implícita do type:any, exigindo que todos os types sejam declarados.