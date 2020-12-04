/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = []
   let cartasComputador = []
   let pontosUsuario = 0
   let pontosComputador = 0
   
   for (let i=0; i<2; i++) {
      cartasUsuario[i] = comprarCarta()
      cartasComputador[i] = comprarCarta()
      pontosUsuario += cartasUsuario[i].valor
      pontosComputador += cartasComputador[i].valor
   }

   // Checando se alguém tem 2 ases
   while (cartasUsuario[0] && cartasUsuario[1] === "A" || cartasComputador[0] && cartasComputador[1] === "A") {
      pontosUsuario = 0
      pontosComputador = 0
      for (let i=0; i<2; i++) {
         cartasUsuario[i] = comprarCarta()
         cartasComputador[i] = comprarCarta()
         pontosUsuario += cartasUsuario[i].valor
         pontosComputador += cartasComputador[i].valor
      }
   }

   // Frases do console
   let frase1 = `Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} `
   let frase2 = `. A carta revelada do computador é ${cartasComputador[0].texto}.`
   let frase3 = `\n` + `Deseja comprar mais uma carta?`
   let result1 = `Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
   let result2 = `Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto}`
   let ind = 0 // Índice para adicionar cartas ao array

   // Rodada do Usuário
   while (confirm(frase1 + frase2 + frase3)) {
      cartasUsuario.push(comprarCarta())
      ind = cartasUsuario.length -1
      pontosUsuario += cartasUsuario[ind].valor
      frase1 += `${cartasUsuario[ind].texto} `
      result1 += ` ${cartasUsuario[ind].texto}`

      if (pontosUsuario > 21) {
         console.log(result1 + ` - pontuação ${pontosUsuario}`)
         console.log(result2 + ` - pontuação ${pontosComputador}`)
         console.log("O computador ganhou!")
         break
      }
   }

   // Rodada do computador
   while (pontosUsuario > pontosComputador && pontosComputador <= 21) {
      cartasComputador.push(comprarCarta())
      ind = cartasComputador.length -1
      pontosComputador += cartasComputador[ind].valor
      result2 += ` ${cartasComputador[ind].texto}`

      if (pontosComputador > 21) {
         console.log(result1 + ` - pontuação ${pontosUsuario}`)
         console.log(result2 + ` - pontuação ${pontosComputador}`)
         console.log("O usuário ganhou!")
         break
      }

      else if (pontosUsuario < pontosComputador) {
         console.log(result1 + ` - pontuação ${pontosUsuario}`)
         console.log(result2 + ` - pontuação ${pontosComputador}`)
         console.log("O computador ganhou!")
         break
      }
   }
}
else {
   console.log("O jogo acabou.")
}

