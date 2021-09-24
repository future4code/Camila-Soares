import express, { Express, Request, Response } from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

// Criar conta

type Client = {
    name: string,
    data: number,
    cpf: number,
    saldo: number
}

// type Saldo = {
//     valor: number,
//     data: number,
//     descricao: string
// }

let clients: Client[] = [
    {
    name: 'Aya',
    cpf: 12312456798,
    data: 11/12/1990,
    saldo: 1
    },

    {
    name: 'Joao',
    cpf: 12456709823,
    data: 23/1/1980,
    saldo: 2
    },

    {
    name: 'Fernando',
    cpf: 45612465365,
    data: 4/5/1995,
    saldo: 2
    },

    {
    name: 'Camila',
    cpf: 14556487690,
    data: 19/5/2000,
    saldo: 3
    },

    {
    name: 'André',
    cpf: 43578623465,
    data: 13/4/1992,
    saldo: 4
    }

]
console.log(clients)

// let saldo: Saldo[] = [
//     valor: 20,
//     data: 1,
//     descricao: ""
// ]

app.get('/clients',(req: Request,res: Response) => {
 let nome = req.query.nome as string
 let data = req.query.data as number | undefined
 let cpf = req.query.cpf as number | undefined

 if(!nome && !data && !cpf) {
   return res.status(404)
 }
 throw new Error("Dados inválidos")

})


//pode criar conta se idade === ou > 18
//informar: nome,cpf e data nascimento



console.log("Hello,world")



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
