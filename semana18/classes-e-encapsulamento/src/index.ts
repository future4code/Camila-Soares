import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
  const cpf: UserAccount = new UserAccount(
    "123.456.763-21",
    "Camila",
    21,
)

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }
  
//               RESPOSTAS EXERCÍCIOS

//Exercício 1
//a) O constructor serve para executar ações ao criar uma instância da classe. Para chamar o constructor usamos 'this' no início
 
//b) Foi impresso uma vez a mmensagem

//c) Para ter acesso à propriedade privada usamos o método getter. 

//Exercício 2

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address= server.address() as AddressInfo
        console.log(`O servidor está rodando em http://localhost: ${address.port}`)
    } else {
        console.error(`Falha ao iniciar o servidor`)
    }
})
