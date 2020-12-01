//EXERICIO 1
// a. false
// b. false
// c. true
// e. boolean

//EXERICIO 2
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// PROGRAMA 1
let idadeUser = prompt("Digite sua idade:")
idadeUser = Number(idadeUser)
let idadeAmigo = prompt("Digite a idade do(a) seu(sua) melhor amigo(a):")
idadeAmigo = Number(idadeAmigo)
let comparaIdade = idadeUser > idadeAmigo
console.log("Sua idade é maior do que a do(a) seu(sua) melhor amigo(a)? - " + comparaIdade)
let difIdade = idadeUser - idadeAmigo
console.log("A diferença de idade entre vocês é " + difIdade)

// PROGRAMA 2
let par = prompt("Insira um número par:")
let resto = Number(par)%2
console.log("O resto da divisão é " + resto)
// c) Ao inserir um número par, o resto da divisão por 2 sempre será 0.
// d) Ao inserir um número ímpar, o resto da divisão por 2 sempre será 1.

// PROGRAMA 3
let listaDeTarefas = [null]
listaDeTarefas[0] = prompt("Escreva três tarefas que precisa realizar, uma por vez. Primeira tarefa:")
listaDeTarefas[1] = prompt("Segunda tarefa:")
listaDeTarefas[2] = prompt("Terceira tarefa:")
console.log(listaDeTarefas)
let i = prompt("Digite o índice de uma tarefa que já tenha realizado (0, 1 ou 2):")
listaDeTarefas.splice(i, 1)
console.log(listaDeTarefas)

// PROGRAMA 4
let nomeDoUsuario = prompt("Por favor, insira seu nome:")
let emailDoUsuario = prompt("Por favor, digite seu e-mail:")
console.log("o email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeDoUsuario)

// DESAFIO 1
//A.
let KELVIN
let GRAUS_FAHRENHEIT = 77
KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(GRAUS_FAHRENHEIT + "°F equivalem a " + KELVIN + "K")
//B.
let GRAUS_CELSIUS = 80
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
console.log(GRAUS_CELSIUS + "°C equivalem a " + GRAUS_FAHRENHEIT + "°F")
//C.
GRAUS_CELSIUS = 30
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(GRAUS_CELSIUS + "°C equivalem a " + GRAUS_FAHRENHEIT + "°F e " + KELVIN + "K")
//D.
GRAUS_CELSIUS = prompt("Insira uma temperatura em °C:")
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(GRAUS_CELSIUS + "°C equivalem a " + GRAUS_FAHRENHEIT + "°F e " + KELVIN + "K")

// DESAFIO 2
// A.
let qwh = 280
custoEnergia = (qwh)*0.05
console.log("Um consumo de " + qwh + " Quilowatt-hora custa R$" + custoEnergia)
// B.
let desconto = 15
custoEnergia *= (1 - desconto/100)
console.log("Um consumo de " + qwh + " Quilowatt-hora, com " + desconto + "% de desconto, " + "custa R$" + custoEnergia)

// DESAFIO 3
// A.
let lb = 20
let kg
kg = 0.453592*(lb)
console.log(lb + "lb equivalem a " + kg + "kg")
// B.
let oz = 10.5
kg = 0.0283495*(oz)
console.log(oz + "oz equivalem a " + kg + "kg")
// C.
let mi = 100
mt = 1609.34*(mi)
console.log(mi + "mi equivalem a " + mt + "m")
// D.
let ft = 50
mt = 0.3048*(ft)
console.log(ft + "ft equivalem a " + mt + "m")
// E.
let gal = 103.56
lt = 4.54609*(gal)
console.log(gal + "gal equivalem a " + lt + "L")
// F.
let xic = 450
lt = 0.284131*(xic)
console.log(xic + "xic equivalem a " + lt + "L")
// G.
ft = prompt("Digite um valor de comprimento (em ft) :")
mt = 0.3048*(ft)
console.log(ft + "ft equivalem a " + mt + "m")
