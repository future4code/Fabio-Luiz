// Exercícios de interpretação de código
// 1.
    // a. Dentro da função conversorDeMoeda recebe um valor do usuário e armazena na variável cotacao
    // b. armazena uma Srtring contendo o valor do parâmetro da função multiplicado pela variável cotacao
    // c. cria a variável meuDinehiro, que invoca a função conversorDeMoeda, com o parâmetro 100
    // d. Imprime no terminal a String citada no item b

// 2.
    // a. Dentro da função investeDinheiro foi declarada a variável valorAposInvestimento
    // b. Foi criada uma condicional onde os parâmetros tipoDeInvestimento e valor. Dependendo do tipo de investimento escolhido, é feito um cálculo com diferentes taxas, multiplicando pela variável valor e atribuindo esse resultado à variável valorAposInvestimento. Caso o parâmetro de entrada não seja nenhum dos apontados, exibe uma mensagem ao usuário
    // c. Ao final da condiconal, o valor da variável valorAposIvestimento é armazenado
    // d. A variável novoMontante invoca a função investeDinheiro, com os parâmetros "Ações" para tipoDeInvestimento e valor 150
    // e. A variável segundoMontante invoca a função investeDinheiro, com os parâmetros "Tesouro Direto" para tipoDeInvestimento e valor 200
    // f. Imprime no terminal o valor da variável novoMontante
    // g. Imprime no terminal o valor da variável segundoMontante

// 3.
    // a. Cria um loop percorrendo todo o array numeros. Se encontra um número parent, armazena esse valor no array1. Se for ímpar, armazena no array2
    // b. Imprime no terminal mensagem mostrando a quantidade de itens no array numeros (array original)
    // c. Imprime no terminal a quantidade de itens no array1 (quantidade de números pares)
    // d. Imprime no terminal a quantidade de itens no array1 (quantidade de números ímpares)

// 4.
    // a. Cria um loop avaliando cada item do array numeros
    // b. A primeira condicional busca item a item qual o menor valor do array e atribui a variável numero1 esse valor. Isso é feito comparado-se item a item e assumindo-se o menor valor da comparação
    // c. A segunda condicional busca item a item qual o maior valor do array e atribui a variável numero2 esse valor. Isso é feito comparado-se item a item e assumindo-se o maior valor da comparação
    // d. Imprime no terminal o valor da variável numero1 (menor item do array numeros)
    // e. Imprime no terminal o valor da variável numero2 (maior item do array numeros)

// --------------------------------------------------------------------------------------------------------------

const arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Exercícios de Lógica de Programação

// 1.
// Loop For
function loopFor(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i]%2 === 0) {
            console.log(`O número ${array[i]} é par`)
        }
        else {
            console.log(`O número ${array[i]} é ímpar`) 
        }
    }
}
// Loop For of
function loopForOf(array) {
    for (num of array) {
        if (num%2 === 0) {
            console.log(`O número ${num} é par`)
        }
        else {
            console.log(`O número ${num} é ímpar`) 
        }
    }
}
// Loop While
function loopWhile(array) {
    let i = 0
    while (i < array.length) {
        if (array[i]%2 === 0) {
            console.log(`O número ${array[i]} é par`)
        }
        else {
            console.log(`O número ${array[i]} é ímpar`) 
        }
        i++
    }
}

// 2.
    // a) false
    // b) false
    // c) true
    // d) true
    // e) true

// 3.
    // const quantidadeDeNumerosPares
    // let i = 0
    // while(i <= quantidadeDeNumerosPares) {
    //   console.log(i*2)
    // }
    // A variável quantidadeDeNumerosPares está declarada mas não possui valor. Além disso, não existe incremento para a variável i após executar a tarefa e o limitante do loop deve ser quando encontrar valor menor que N, não igual. Da forma que está, o loop While não sabe quando deve parar. Abaixo segue o código correto
    function paresN() {
        const quantidadeDeNumerosPares = Number(prompt("Insira um valor par N:"))
        let i = 0
        while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
        }
    }

// 4.
    function triangulo(a,b,c) {
        if (a === b && b === c) {
            console.log(`Triângulo equilátero com lados ${a}, ${b} e ${c}`)
        }
        else if (a === b || b === c || a === c) {
            console.log(`Triângulo isósceles com lados ${a}, ${b} e ${c}`)
        }
        else {
            console.log(`Triângulo escaleno com lados ${a}, ${b} e ${c}`)
        }
    }

// 5.
    function compararNumeros(num1,num2) {
        console.log(`ENTRADA:`)
        console.log(`${num1} e ${num2}`)
        console.log(`SAÍDA:`)
        let maior = 0
        let menor = 0
        if (num1 > num2) {
            maior = num1
            menor = num2
        }
        else {
            maior = num2
            menor = num1
        }
        let diferenca = maior - menor
        console.log(`O maior é: ${maior}`)
        if (num1%num2 !== 0) {
            console.log(`${num1} não é divisível por ${num2}`)
        }
        else {
            console.log(`${num1} é divisível por ${num2}`)
        }
        if (num2%num1 !== 0) {
            console.log(`${num2} não é divisível por ${num1}`)
        }
        else {
            console.log(`${num2} é divisível por ${num1}`)
        }
        console.log (`A diferença entre eles é ${diferenca}`)
        
    }

// --------------------------------------------------------------------------------------------------------------

// Exercícios de Funções

// 1.
    function segundoMaiorMenor(array) {
        let menor = Infinity
        let maior = 0
        let segundoMenor = Infinity
        let segundoMaior = 0
        // Acha o maior e o menor
        for (num of array) {
            if(num < menor) {
                menor = num
            }
            if(num > maior) {
                maior = num
            }
        }
        // Acha o segundo maior e o segundo menor
        for (num of array) {
            if(num < segundoMenor && num > menor) {
                segundoMenor = num
            }
            if(num > segundoMaior && num < maior) {
                segundoMaior = num
            }
        }
        // console.log(`Maior: ${maior} | Menor: ${menor}`)
        console.log(`Segundo maior: ${segundoMaior} | Segundo menor: ${segundoMenor}`)
    }
    // segundoMaiorMenor(arrayTeste)

// 2.
    const sayHello = () => {
        alert("Hello Labenu!")
    }
    // sayHello()

// --------------------------------------------------------------------------------------------------------------

// Exercícios de Objetos

// 1. Array é uma estrutura que armazena um conjunto de elemntos ordenados. Objetos são um conjunto de propriedades e propriedades são associações de chaves e valores. Arrays são úteis quando precisamos de listas de itens, como a chamada de uma sala de aula por exemplo. Já objetos são úteis para armazenar informações mais completas como dados cadastrais de cada usuário de um produto, onde cada conjunto de dados é uma propriedade e cada propriedade é uma informação do cadastro (Nome, telefone, etc.) associada ao seu valor (Pedro, 2444-2133, etc.)

// 2.
    function criaRetangulo(lado1, lado2) {
        return {
            largura: lado1,
            altura: lado2,
            perimetro: 2*(lado1 + lado2),
            area: lado1*lado2
        }
    }
    // criaRetangulo(10, 20)

// 3.
    const filmeFavorito = {
        titulo: "Rocky",
        ano: 1976,
        diretor: "John G. Avildsen",
        elenco: ["Sylvester Stallone", "Burgess Meredith", "Talia Shire", "Burt Young", "Carl Weathers"]
    }
    let frase = `Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por`
    // const lastName = filmeFavorito.elenco.length-1
    for (let i=0; i<filmeFavorito.elenco.length; i++) {
        if(i !== filmeFavorito.elenco.length-1) {
            frase += ` e ${filmeFavorito.elenco[i]},`    
        }
        else {
            frase += ` ${filmeFavorito.elenco[i]}.`
        }
    }
    // console.log(frase)

// 4.
    const dadosUsuario = {
        nome: "Fabio",
        idade: 32,
        email: "22fsantos@gmail.com",
        endereco: "Minha casa :)"
    }
    function anonimizarPessoa() {
        const novosDados = {
            ...dadosUsuario,
            nome: "ANÔNIMO"
        }
        return novosDados
    }

// --------------------------------------------------------------------------------------------------------------

// Exercícios de Funções de array

// 1.
    const arrayPessoas = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 } 
    ]

    const adultos = arrayPessoas.filter((pessoa) => {
        if (pessoa.idade >= 20) {
            return pessoa
        }
    })

    const jovens = arrayPessoas.filter((pessoa) => {
        if (pessoa.idade < 20) {
            return pessoa
        }
    })

// 2.
const array = [1, 2, 3, 4, 5, 6]
// a)
const arrayDobrado = array.map((num) => {
    return num *= 2
})
// b)
const arrayTriplicadoString = array.map((num) => {
    num*= 3
    return num.toString()
})
// c)
const checaParImpar = array.map((num) => {
    if(num%2 === 0) {
        num = `${num} é par`
        return num
    }
    else {
        num = `${num} é ímpar`
        return num
    }
})

// 3.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const liberadosParque = pessoas.filter((pessoa) => {
    if(pessoa.altura >= 1.5 && (pessoa.idade > 14 && pessoa.idade < 60)) {
        return pessoa
    }
})

const proibidosParque = pessoas.filter((pessoa) => {
    if(pessoa.altura < 1.5 || (pessoa.idade < 14 || pessoa.idade > 60)) {
        return pessoa
    }
})

// 4.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const mensagemClientes = consultas.map((paciente) => {
    let emailFinal = `Olá, `
    
    if(paciente.genero === "masculino") {
        emailFinal += `Sr. ${paciente.nome}. `
    }
    else {
        emailFinal += `Sra. ${paciente.nome}. `
    }

    if(paciente.cancelada) { 
        emailFinal += `Infelizmente, sua consulta marcada para o dia `
        emailFinal += `${paciente.dataDaConsulta} foi cancelada. `
        emailFinal += `Se quiser, pode entrar em contato conosco para remarcá-la`
    }
    else {
        emailFinal += `Estamos enviando esta mensagem para `
        if(paciente.genero === "masculino") {
            emailFinal += `lembrá-lo  `
        }
        else {
            emailFinal += `lembrá-la  `
        }
        emailFinal += `da sua consulta no dia ${paciente.dataDaConsulta}. `
        emailFinal += `Por favor, acuse o recebimento deste e-mail.`
    }
    return emailFinal
})

// 5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente) => {
    const despesas = cliente.compras.reduce((total, item) => {
        return total += item
    },0)
    cliente.saldoTotal -= despesas
    return cliente
})