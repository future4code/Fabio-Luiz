// Exercícios de interpretação de código
// EXERCÍCIO 1
// a. Será impresso no console:
//                              10
//                              50
// b. Não apareceria nada pois a função seria chamada mas nenhum resultado seria exposto

// EXERCÍCIO 2
// a. Será impresso no console:
//                              Darvas
//                              Caio
// b. Será impresso no console:
//                              Amanda
//                              Caio

// EXERCÍCIO 3
// A função recebe um array inserido pelo usuário e devolve um novo array apenas com os valores pares, elevados ao quadrado.
// Um melhor nome para a função seria numerosParesAoQuadrado

// ------------------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código

// EXERCÍCIO 4
// a.
function apresentacao() {
    console.log("Eu sou Fabio, tenho 32 anos, moro no Rio de Janeiro e sou estudante.")
}

// b.
let apresentacao2 = (nome, idade, cidade, simOuNao) => {
    if (simOuNao === true) {
        console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou estudante.`)
    }
    else {
        console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e não sou estudante.`)
    }
}

// EXERCÍCIO 5
// a.
let somaNumeros = function(num1, num2) {
    soma = num1 + num2
    return soma
}

// b.
let comparaNumeros = function(num1, num2) {
    if (num1 >= num2) {
        console.log(`O número ${num1} é maior ou igual a ${num2}`)
    }
    else {
        console.log(`O número ${num1} não é maior ou igual a ${num2}`)
    }
}

// c.
let mensagens = function(mensagem) {
    for (i = 1; i < 11; i++) {
        console.log(mensagem)
    }
}

// EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// a.
function contArray(arrayUsr) {
    return arrayUsr.length
}

// b.
function checaPar(num) {
    if (num%2 === 0) {
        console.log(`${num} é um número par.`)
    }
    else {
        console.log(`${num} não é um número par.`)
    }
}

// c.
function paresArray(arrayUsr) {
    let pares = 0
    for (num of arrayUsr) {
        if (num%2 === 0) {
            pares++
        }
    }
    return pares
}

// d.
function paresArray(arrayUsr) {
    for (num of arrayUsr) {
        checaPar(num)
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------

// Desafios

// EXERCICIO 1
// 1.
let msgConsole = (msg) => {
    console.log(msg)
}

// 2.
let somaNums = (num1, num2) => {
    let soma = num1 + num2
    msgConsole(soma)
}

// EXERCICIO 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a.
let dobrarNumeros = (arrayUser) => {
    let arrayDobrado = []
    for (num of arrayUser) {
        if (num%2 === 0) {
            arrayDobrado.push(num * 2)
        }
    }
    return arrayDobrado
}

// b.
let maiorNumero = (arrayUser) => {
    let maior = 0
    for (num of arrayUser) {
        if (num > maior) {
            maior = num
        }
    }
    return maior
}

// c.
let indiceMaiorNumero = (arrayUser) => {
    let maior = 0
    for (num of arrayUser) {
        if (num > maior) {
            maior = num
        }
    }
    let i = 0
    for (num of arrayUser) {
        if (num === maior) {
            break
        }
        else {
            i++
        }
    }
    return i
}

// d.
let inverter = (arrayUser) => {
    let arrayInvertido = []
    for (i = arrayUser.length; i >= 0; i--) {
        arrayInvertido.push(arrayUser[i])
    }
    return arrayInvertido
}