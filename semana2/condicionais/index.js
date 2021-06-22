// --------------------------------------- EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO ---------------------------------------------------
// EXERCÍCIO 1: a)O código realiza o teste que se o número digitado pelo usuário,for dividido por 2 e restar zero será par,logo,passou no teste.
//              b)Números pares
//              c)Números ímpares
// EXERCÍCIO 2: a) No código acima, foi utilizada switch pois existia mais de 2 condições. Então caso o usuário digite uma fruta aleatória,o valor retornado será 5.
//              b) O valor impresso no console,será 2.25
//              c) A mensagem impressa no console seria a mesma,dizendo que o preço da pêra seria 5.5
//
// EXERCÍCIO 3: a) A primeira linha está pedindo para o usuário digitar um número. Existe um 'Number' em frente,pois se não tivesse,a informação digitada pelo usuário seria uma string.
//              b) Se o usuário digitou o número 10,ele receberia a mensagem dizendo que "esse número passou no teste". Caso o usuário digitasse -10
// não apareceria nenhuma mensagem,o código foi feito para aparecer uma mensagem,apenas se o número fosse maior que o zero.
//              c) Sim,haveria um erro no console. Haveria erro pois a condição IF iria ser executada se fosse true,e como seria false,ocorre erro no console.

// --------------------------------------- EXERCÍCIOS ESCRITA DE CÓDIGO ------------------------------------------------------------
// EXERCÍCIO 1: 
const idadeUsuario = Number(prompt("Qual a sua idade?"))
let podeDirigir = idadeUsuario >= 18
let naoPodeDirigir = idadeUsuario < 18
if (podeDirigir) {
    console.log("Você pode dirigir!")

} else if (naoPodeDirigir) {
    console.log("Você não pode dirigir!")
}

//EXERCÍCIO 2:

let turnoDoAluno = prompt("Em qual turno você estuda? Digite M (matutino), ou V (vespertino) ou N(noturno)." )
let condicao1 = turnoDoAluno === "M"
let condicao2 = turnoDoAluno === "V"
let condicao3 = turnoDoAluno === "N"
if (condicao1) {
    console.log("Bom dia!")
} else if (condicao2)  { 
    console.log("Boa tarde!")

} else if (condicao3) {
   console.log("Boa noite!")
} 


// EXERCÍCIO 3:

let turnoDoAluno = prompt("Em qual turno você estuda? Digite M (matutino), ou V (vespertino) ou N(noturno)." )

switch (turnoDoAluno) {
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")

}


// EXERCÍCIO 4:


let perguntaUsuarioGeneroFilme = prompt("Qual o gênero do filme que vamos assistir?")
let perguntaUsuarioValorIngresso = Number(prompt("Qual o valor do ingresso?"))
let condicaoAssistirFilme = perguntaUsuarioGeneroFilme === "Fantasia" 
let condicaoAssistirFilme2 = perguntaUsuarioValorIngresso < 15
let condicaoParaNaoAssistir = perguntaUsuarioGeneroFilme !== "Fantasia"
if (condicaoAssistirFilme && condicaoAssistirFilme2) {
    console.log("Bom filme!!")
  
} else if (condicaoParaNaoAssistir) {
    console.log("Escolha outro filme!")

}
