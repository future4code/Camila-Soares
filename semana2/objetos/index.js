// ---------------------------------  EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO -----------------------
/* EXERCÍCIO 1: a) No console.log(filme.elenco[0]) será impresso a primeira posição do elenco,que seria Matheus Nachtergaele
                   No console.log(filme.elenco.length -1) será impresso a última posição,que seria Virginia Cavendish.
                   No console.log(filme.transmissoesHoje[2]) será impresso no canal Globo. 

   EXERCÍCIO 2: a) No console.log(cachorro) será impresso todo o objeto 'cachorro'
                   No console.log(gato) será impresso todo o objeto 'gato' com o nome alterado para 'Juca'
                   No console.log(tartaruga) será impresso no console todo o objeto 'gato',a diferença é que no nome todas as letras com a,será substítuido por O.
                b) A função dos '...' é copiar o objeto ou array inteiro. Através dessa função,podemos alterar um nome.
   EXERCÍCIO 3: a) Será impresso no primeiro console,o resultado false. Pois backender é false.
                   No segundo console,será impresso undefined. 
                b) O valor impresso no console,eu entendi que resultou em undefined pois a propriedade 'altura' não foi declarada e nem definida. Ela não existe. */

// ---------------------------------- EXERCÍCIOS ESCRITA DE CÓDIGO --------------------------------
 
// EXERCÍCIO 1: a)  
                 const pessoa = {
                  nome: "Camila",
                  apelidos: ["Mi","Cami","Camilinha"]
                  }
                  
                    console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

                  
 pessoa()
// // EXERCÍCIO 2: a) 
//                   const informacoesPessoa = {
//                       nome: "Camila",
//                       idade: 21,
//                       profissao: "Estudante"
//                   }

//                   const novaPessoa = {
//                     ...informacoesPessoa = {
//                       nome: "João",
//                       idade: 22,
//                       profissao: "Estudante"
                
//                   }
//                 }

//                 informacoesPessoa()
// // //              b) 
// //    function mostrarInformacoes()
// //    {
// //     const nomes = [informacoesPessoa.nome,informacoesOutraPessoa.nome]

// //    }
// //    console.log(nomes)

// // mostrarInformacoes()

// // // EXERCÍCIO 3:
// //  let carrinho = [ ]
// //  let frutasSacolao = {
// //      nome: "Mamão",
// //      ehFruta: true
// //  }
// //  function (frutasSacolao)
