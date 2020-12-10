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
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      pontosUsuario += cartasUsuario[i].valor
      pontosComputador += cartasComputador[i].valor
   }
   
   console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontosUsuario}`)
   console.log(`Usuário - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontosComputador}`)

   if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!")
   }
   else if (pontosUsuario < pontosComputador) {
      console.log("O computador ganhou!")
   }
   else {
      console.log("Empate!")
   }

}
else {
   console.log("O jogo acabou.")
}
