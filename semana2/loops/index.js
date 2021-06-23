// --------------------------- EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO ------------------------------------
// EXERCÍCIO 1: 
// EXERCÍCIO 2: a) No console será impresso os números da lista de arrays que são maiores que o 18. Então
//                 no console,será impresso os números 19,21,23,25,27,30.
//              b) Sim,é suficiente. Para ser usado,na condição do IF,dentro do bloco de código, o console
//                 ficaria assim: console.log(lista[0]), e dentro do colchete seria colocado o índice de
//                 cada item.
// EXERCÍCIO 3: O resultado impresso no console seria a quebra de 4 linhas, com asteriscos. 
//              1ª linha: *
//              2ª linha: **
//              3ª linha: ***
//              4ª linha: ****

// --------------------------- EXERCÍCIOS ESCRITA DE CÓDIGO --------------------------------------------
// EXERCÍCIO 1: a)
let perguntaUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))
let condicao1 = perguntaUsuario === 0
let condicao2 = perguntaUsuario > 0
let arrayPetsUsuario = [ ]

if (condicao1) {
    console.log("Que pena! Você pode adotar um pet!")
 
} else if (condicao2) {
    console.log(prompt("Digite o nome deles!"))
}  break



let quantidadeMaior = perguntaUsuario > 1

 while (quantidadeMaior) {
     console.log(quantidadeMaior)
//codigo
 }



// EXERCÍCIO 2: a)
  let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


function imprimeCadaValor() {
    console.log(arrayOriginal)
}

imprimeCadaValor(1, 2)











