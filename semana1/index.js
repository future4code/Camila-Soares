/*EXERCÍCIO 1:
Boa tarde! Estou tendo muitas dificuldades,eu acredito quenNo primeiro exercício,eu interpretei que na terceira linha que diz console.log(b) está retornando o valor de B.
Na quarta linha,o  valor do B foi mudado pois a variável let permite tal feito,e na quinta linha está imprimindo o valor da variável a e b juntas. */


/*EXERCÍCIO 2:
Eu entendi que as variáveis A e B possuem o valor de 10 e 20 respectivamente,e a variável C é indefinida. No final,o console.log imprime o valor das três variáveis juntas.*/

/*EXERCÍCIO 3:
Eu escreveria dessa forma:
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valor = prompt("Quanto você recebe por dia?")
alert('Voce recebe ${valor/horasTrabalhadas} por hora')
*/

/*--------------- EXERCÍCIOS ESCRITA DE CÓDIGO QUESTAO 1------*/


let nome 
let idade 

typeof nome
typeof idade

// A resposta dada pelo console foi: not available,isso aconteceu pois as duas variáveis não possuem valores definidos.//



const nome = prompt ('Qual o seu nome?')
const idade= prompt ('Qual a sua idade?')
console.log('Tipo aramazenado na variável nome:',typeof nome)
console.log('Tipo aramazenado na variável idade:',typeof idade)

//Após imprimir o tipo das duas variáveis na minha tela recebi as respostas que as duas são strings.//

console.log (nome,idade) 


/*----------EXERCÍCIOS DE CÓDIGO QUESTAO 2---------*/
const respostaPrimeiraPergunta = prompt("Voce gosta de azul? SIM")
const respostaPrimeiraPergunta = prompt("Voce gosta de ver netflix? SIM")
const respostaPrimeiraPergunta = prompt("Voce gosta de tirar um cochilo após o almoço? SIM")




/*-----------EXERCÍCIOS DE CÓDIGO QUESTAO 3------------*/
let a = 10
let b = 25
let c = a
a = b
b = c
//Irei trocar os valores//
console.log(a)
console.log(b)
