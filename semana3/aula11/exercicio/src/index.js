// EXERCICIO 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)
// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// RESPOSTA
// 1. O código declara o que foi digitado pelo usuário na variável 'respostaDoUsuario'
// 2. depois declara a variável 'numero' com o valorda variavel 'respostaDoUsuario' a tipifica como número.
// 3. Depois checa através de uma condicional qual o resto da divisão do valor da varável 'numero' por 2.
// 4. Se o resto é igual a 0, imprime no console a mensagem "Passou no teste.".
// 5. Se o resto é diferente de 0, imprime no console "Não passou no teste."
// A mensagem "Passou no teste" será impressa para números pares.
// A mensagem "Não passou no teste" será impressa para números ímpares.

// -----------------------------------------------------------------------------------------------------------

// EXERCICIO 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;  // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// RESPOSTA
// 1. O código declara o que foi digitado pelo usuário na variável 'fruta'
// 2. declara a variável 'preco' sem atribuir um valor a ela.
// 3. Abre-se um bloco de condições para o valor da variável 'fruta'
// 4. Se o valor de 'fruta' for 'Laranja', a variável 'preco' terá o valor de 3.5
// 5. Se o valor de 'fruta' for 'Maçã', a variável 'preco' terá o valor de 2.25
// 6. Se o valor de 'fruta' for 'Uva', a variável 'preco' terá o valor de 0.30
// 7. Se o valor de 'fruta' for 'Pêra', a variável 'preco' terá o valor de 5.5
// 8. Para qualquer outro valor de 'fruta', a variável 'preco' terá o valor de 5
// 9. O console irá imprimir uma mensagem mostrando qual a fruta e seu respectivo preço.
// a. O código serve para mostrar o valor da fruta selecionada pelo usuário.
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

// -----------------------------------------------------------------------------------------------------------

// EXERCICIO 3
// const numero = Number(prompt("Digite o primeiro número."))
// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)

// RESPOSTA
// a. Está declarando a variável 'numero', atribuindo a ela o valor digitado pelo usuário e tipificando esse valor como Número.
// b. Se o usuário digitar '10', a mensagem no terminal será "Esse número passou no teste". Se o usuário digitar '-10', ocorrerá um erro
// c. Há um erro na exibição no terminal da linha 'console.log(mensagem)' pois a variável 'mensagem' foi declarada dentro de um escopo filho, estando inacessível pelo escopo pai.

// -----------------------------------------------------------------------------------------------------------

// EXERCICIOS DE ESCRITA DE CÓDIGO

// // EXERCICIO 4
let idadeDoUsuario = Number(prompt("Por favor, digite sua idade:"))
if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir")
}

// -----------------------------------------------------------------------------------------------------------

// // EXERCICIO 5
let turno = prompt("Por favor, digite a letra referente ao seu turno de aulas. M = Matutino; V = Vespertino; N = Noturno")
if (turno === "M") {
    console.log("Bom dia!")
}
else if (turno === "V") {
    console.log("Bom tarde!")
}
else if (turno === "N") {
    console.log("Bom noite!")
}
else {
    console.log("Digite uma letra válida")
}

// -----------------------------------------------------------------------------------------------------------

// EXERCICIO 6
let turno = prompt("Por favor, digite a letra referente ao seu turno de aulas. M = Matutino; V = Vespertino; N = Noturno")
switch (turno) {
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Bom tarde!")
        break
    case 'N':
        console.log("Bom noite!")
        break
    default:
        console.log("Digite uma letra válida")
        break
}

// -----------------------------------------------------------------------------------------------------------

// EXERCICIO 7
let genero = prompt("Digite o gênero de filme que deseja assistir. (apenas letras minúsculas")
if (genero === "fantasia") {
    let preco = Number(prompt("Quanto deseja pagar?"))
    if (preco <= 15) {
        console.log("Bom filme!")
    }
    else {
        console.log("Escolha outro filme :(")
    }
}
else {
    console.log("Escolha outro filme :(")
}

// -----------------------------------------------------------------------------------------------------------

// DESAFIO 1
let genero = prompt("Digite o gênero de filme que deseja assistir. (apenas letras minúsculas")
if (genero === "fantasia") {
    let preco = Number(prompt("Quanto deseja pagar?"))
    if (preco <= 15) {
        let snack = prompt("qual snack vai comprar?")
        console.log("Bom filme!")
        console.log("...com " + snack)
    }
    else {
        console.log("Escolha outro filme :(")
    }
}
else {
    console.log("Escolha outro filme :(")
}

// -----------------------------------------------------------------------------------------------------------

// DESAFIO 2
let nomeDoUsuario = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Qual tipo de jogo deseja assistir? IN = Internacional; DO = Doméstico")
let _tipoDeJogo
switch (tipoDeJogo) {
    case 'IN':
    _tipoDeJogo = "Internacional"
    break
    case 'DO':
    _tipoDeJogo = "Doméstico"
    break
}
let etapa = prompt("Qual etapa do campeonato deseja assistir? SF = Semi-final; DT = Terceiro lugar; FI = Final")
let _etapa
switch (etapa) {
    case 'SF':
    _etapa = "Semi-Final"
    break
    case 'DT':
    _etapa = "Decisão de terceiro lugar"
    break
    case 'FI':
    _etapa = "Final"
    break
}
let categoria = Number(prompt("Qual categoria irá escolher? Escolha de 1 a 4"))
let qtde = Number(prompt("Quantos ingressos irá comprar?"))
let preco
switch (etapa) {
    case "SF":
        switch (categoria) {
            case 1:
                preco = 1320.00
                break
            case 2:
                preco = 880.00
                break
            case 3:
                preco = 550.00
                break
            case 4:
                preco = 220.00
                break
        }
        case "DT":
            switch (categoria) {
                case 1:
                    preco = 660.00
                    break
                case 2:
                    preco = 440.00
                    break
                case 3:
                    preco = 330.00
                    break
                case 4:
                    preco = 170.00
                    break
            }
            case "FI":
                switch (categoria) {
                    case 1:
                        preco = 1980.00
                        break
                    case 2:
                        preco = 1320.00
                        break
                    case 3:
                        preco = 880.00
                        break
                    case 4:
                        preco = 330.00
                        break
                }
}
let total = preco * qtde
console.log("---Dados da compra---")
console.log("Nome do cliente: " + nomeDoUsuario)
console.log("Tipo de Jogo: " + _tipoDeJogo)
console.log("Etapa do jogo: " + _etapa)
console.log("Categoria: " + categoria)
console.log("Quantidade de Ingressos: " + qtde + " ingressos")
console.log("---Valores--- ")
switch (tipoDeJogo) {
    case "DO":
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + total)
        break
    case "IN":
        preco /= 4.10
        total = preco * qtde
        console.log("Valor do ingresso: US$" + preco)
        console.log("Valor total: US$" + total)
        break
}
