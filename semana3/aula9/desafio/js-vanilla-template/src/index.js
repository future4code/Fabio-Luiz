// EXERCICIO DE INTERPRETAÇÃO
// 1)
a = 10
b = 10

console.log(b) // 10

b = 5
console.log(a, b) // 10 5

// 2)
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10

// --------------------------------------------------------------------------------

// EXERCICIO DE CODIGO
// EXERCIIO 1
// A)
let nome
// B)
let idade
// C)
console.log("A variável 'nome' é do tipo " + typeof nome + " e a variável 'idade' é do tipo " + typeof idade) // o console retorná undefined para ambas as variáveis pois elas foram apenas declaradas mas seu tipo não foi definido ainda
// D)
nome = prompt("Digite seu nome:")
idade = prompt("Agora digite sua idade:")
// E)
console.log("A variável 'nome' é do tipo " + typeof nome + " e a variável 'idade' é do tipo " + typeof idade) // Ambas retornaram tipo string pois foram digitadas pelo usuário como um texto através do comando prompt
// F)
console.log("Olá " + nome + ", você tem " + idade + " anos.")

// EXERCICIO 2
// QUIZ DE 5 PERGUNTAS
let comida = prompt("Qual sua comida favorita?")
console.log("Resposta: " + comida)

let local = prompt("Em qual país gostaria de morar?")
console.log("Resposta: " + local)

let cor = prompt("Qual sua cor favorita?")
console.log("Resposta: " + cor)

let time = prompt("Qual seu time de futebol?")
console.log("Resposta: " + time)

let banda = prompt("Qual sua banda favorita?")
console.log("Resposta: " + banda)

// EXERCICIO 3
// A)
let comidas = ["Pizza", "Hamburguer", "Lasanha", "Batata-frita", "Macarrão"]
console.log (comidas)
// B)
console.log ("Essa é minha lista de comidas favoritas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
// C)
comidas[1] = prompt("Não gosta de" + comidas[1] + "? Escolha outra:")
console.log ("Minha nova lista de comidas favoritas é:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// EXERCICIO 4
// A)
perguntas = ["Gostaria de viver no campo?", "Votou nas últimas eleições?", "Gosta de computação?"]
respostas = [false, true, true]
console.log(perguntas[0] + " R.: " + respostas[0])
console.log(perguntas[1] + " R.: " + respostas[1])
console.log(perguntas[2] + " R.: " + respostas[2])