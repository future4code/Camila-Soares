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

    console.log("Boas vindas ao jogo de BlackJack!")
    //Primeira carta Jogador
    if (confirm("Quer iniciar uma nova rodada?")) {
       const jogador = comprarCarta()
       console.log (`${jogador.texto} - ${jogador.valor}`)
     const jogador2 = comprarCarta()
     console.log(`${jogador2.texto} - ${jogador.valor}`)
    
    const computadorPrimeiraCarta = comprarCarta()
    console.log(`${computadorPrimeiraCarta.texto} ${computadorPrimeiraCarta.valor}`)
    
    const computadorSegundaCarta = comprarCarta()
    console.log(`${computadorSegundaCarta.texto} ${computadorSegundaCarta.valor}`)
    
    const resultadoDoJogador = jogador.valor + jogador2.valor
    const resultadoDoComputador = computadorPrimeiraCarta.valor + computadorSegundaCarta.valor
    
    console.log(`Resultado do jogador: ${resultadoDoJogador}` )
    console.log(`Resultado do computador: ${resultadoDoComputador}`)
    
    } else {
       console.log("O jogo acabou.")
    }
    
    comprarCarta()