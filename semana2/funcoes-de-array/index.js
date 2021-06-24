// -------------------------- EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO --------------------------------------------

// EXERCÍCIO 1: a) No console será impresso, o novo array, que será o nome de cada usuário,com o seu apelido
//                 e o índice(através do index).
// EXERCÍCIO 2: a) Será impresso no console, os nomes dos itens do Array,pois no return só pediu item.nome.
// EXERCÍCIO 3: a) Atráves do filter,irá aparecer no console os apelidos que são diferentes de "Chijo", então
//                 no console irá aparecer os apelidos "Mandi" e "Laura".

// --------------------------- EXERCÍCIOS ESCRITA DE CÓDIGO --------------------------------------------------
// EXERCÍCIO 1: 

const pets = [
{ nome: "Lupin", raca: "Salsicha" },
{ nome: "Polly", raca: "Lhasa Apso" },
{ nome: "Madame", raca: "Poodle" },
{ nome: "Quentinho", raca: "Salsicha" },
{ nome: "Fluffy", raca: "Poodle" },
{ nome: "Caramelo", raca: "Vira-lata" },
 ]


const novoArray = pets.map((pet, index, array) => {
    return pet.nome  // Letra A
})
   console.log(novoArray) 



const novoArray2 = pets.filter((item,index,array) => {
    return item.raca === "Salsicha"
  })
  console.log(novoArray2) //Letra B
  
// // EXERCÍCIO 2: 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const novoArrayProdutos = produtos.map((produto,index,array) => {
    return produto.nome
})
console.log(novoArrayProdutos) //Letra A


const produtosBebidas = produto => produto.categoria === "Bebidas"
const bebidas = produtos.filter(produtosBebidas)
console.log(bebidas) // Letra C
