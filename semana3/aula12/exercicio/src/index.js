// Exercícios de interpretação de código

// EXERCÍCIO 1
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// 1. O Código está delcarando a variável 'valor' com valor '0'.
// 2. Um loop é iniciado, adicionando-se à variável 'valor' o número do respectivo ciclo. Logo, no primeiro ciclo somará 1, no segundo somará 2, até o final do ciclo que será no quarto (i < 5)
// 3. No console será impresso o valor final da variável 'valor'. Nesse caso, será 10 (1 + 2 + 3 + 4 = 10)

// ----------------------------------------------------------------------------------------------

// EXERCÍCIO 2
// a. O console irá imprimir todos os valores do array maiors que 18.
// b. Sim, é possível acessar o índice da lista da seguinte maneira:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero + " i = " + i)
//     }
//     i++
// }

// ----------------------------------------------------------------------------------------------

// DESAFIO 1
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// R.: O console irá imprimir "0000" no final

// ----------------------------------------------------------------------------------------------

// Exercícios de escrita de código

// EXERCÍCIO 3
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// a.
for (let i = 0; i < array.length; i++) {
    console.log(array[i]) 
}

// b.
for (let i = 0; i < array.length; i++) {
    array[i] /= 10
    console.log(array[i]) 
}

// c.
let pares=[]
for (let numero of array) {
    if (numero%2 === 0) {
        pares.push(numero)
    }
}
console.log(pares)

// d.
let arrayString = []
for (let i = 0; i < array.length; i++) {
    arrayString[i] = "O elemento do index " + i + " é " + array[i]
}
console.log(arrayString)

// e.
let valorMaximo = 0
let valorMinimo = 1000000
for (let num of array) {
    if (num < valorMinimo) {
        valorMinimo = num
    }
}
for (let num of array) {
    if (num > valorMaximo) {
        valorMaximo = num
        console.log(valorMaximo)
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

// ----------------------------------------------------------------------------------------------

// DESAFIO 2
let num = Number(prompt("Insira um número a ser adivinhado, de 1 a 10:"))
console.log("Vamos jogar!")
let chute = 0
let i = 0
while (chute !== num) {
    chute = Number(prompt("Chute um número, de 0 a 10:"))
    if (chute > num) {
        console.log(`O número chutado foi: ${chute}`)
        console.log("Errrrrrrrou, é menor")
        i++
    }
    else if (chute < num){
        console.log(`O número chutado foi: ${chute}`)
        console.log("Errrrrrrrou, é maior")
        i++
    }
}
i++
console.log(`O número chutado foi: ${chute}`)
console.log("Acertou!!")
console.log(`O número de tentativas foi: ${i}`)

// ----------------------------------------------------------------------------------------------

// DESAFIO 3
let num = Math.floor((Math.random() * 100) + 1)
console.log("Vamos jogar!")
let chute = 0
let i = 0
while (chute !== num) {
    chute = Number(prompt("Chute um número, de 0 a 100:"))
    if (chute > num) {
        console.log(`O número chutado foi: ${chute}`)
        console.log("Errrrrrrrou, é menor")
        i++
    }
    else if (chute < num){
        console.log(`O número chutado foi: ${chute}`)
        console.log("Errrrrrrrou, é maior")
        i++
    }
}
i++
console.log(`O número chutado foi: ${chute}`)
console.log("Acertou!!")
console.log(`O número de tentativas foi: ${i}`)

// Essa alteração foi fácil. Bastou alterar o valor da variável do número a ser adivinhado pela expressão para gerar o número aleatório.