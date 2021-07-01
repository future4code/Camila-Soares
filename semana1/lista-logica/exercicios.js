// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaUsuario = Number(prompt("Digite a altura"))
  const larguraUsuario = Number(prompt("Digite a largura"))
  const calculo = alturaUsuario * larguraUsuario
  console.log(calculo)
}

// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt("Qual o ano atual?"))
 let anoDeNascimento = Number(prompt("Em qual ano você nasceu?"))
 let idade = anoAtual - anoDeNascimento
 console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 let pesoUsuario = 84
 let alturaUsuario = 1.8
let imc = pesoUsuario / (alturaUsuario * alturaUsuario)
console.log(imc)
return imc

}
calculaIMC()
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual o seu nome?")
  let idade = Number(prompt("Qual a sua idade?"))
  let email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual a sua cor favorita?")
  let cor2 = prompt("Qual a sua cor favorita?")
  let cor3 = prompt("Qual a sua cor favorita?")
  let array = [cor1,cor2,cor3]
  console.log(array)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let texto = "banana"
  let textoEmMaiusculo = texto.toUpperCase()
  console.log(textoEmMaiusculo)
  }
  retornaStringEmMaiuscula()


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoEspetaculo = 3000
  let valor = 100
  let paraNaoTerPrejuizo = custoEspetaculo / valor
  console.log(paraNaoTerPrejuizo)
  return 30
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let texto1 = "banana"
let texto2 = "ola"
let saoIguais = texto1.length === texto2.length
console.log(saoIguais)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
// let arrayDeFrutas = ["Banana","Maçã","Abacaxi"]
// console.log(arrayDeFrutas[0])
// return arrayDeFrutas
let arrayDeFrutas = ["Limão", "Lixia","Abacaxi"]
console.log(arrayDeFrutas[0])
return arrayDeFrutas

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let arrayDeFrutas = ["Morango", "Maçã","Banana"]
  return [arrayDeFrutas.length-1] 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
let texto1 = "oLa"
let texto2 = "Ola"
let texto1Maiusculo = texto1.toUpperCase()
let texto2Maiusculo = texto2.toUpperCase()
let comparacaoStrings = texto1Maiusculo === texto2Maiusculo
console.log(comparacaoStrings)
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}