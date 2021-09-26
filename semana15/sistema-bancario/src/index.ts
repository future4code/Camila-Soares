import express, { Express, Request, Response } from 'express'
import { AddressInfo } from 'net'
import { contas } from './contas'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

// Criar conta

app.post("/users/create", (req: Request,res: Response) => {
    try{

    const { nome, cpf, dataDeNascimentoAsString } = req.body

    const [dia, mes , ano] = dataDeNascimentoAsString.split("/")
    const dataDeNascimento: Date = new Date(`${ano}-${mes}-${dia}`)
    
    contas.push({
        nome,
        cpf,
        dataDeNascimento,
        saldo: 0,
        statement: []
    })
    res.status(201).send("Conta criada com sucesso!")

    } 
    catch(error) {
        console.log(error)
    res.status(400).send(error.message)
    }
})

// Vizualizar usuários

app.get("users/all",( req: Request,res: Response ) => {
    try{
        if(!contas.length) {
            res.statusCode = 404
            throw new Error("Não foi encontrada nenhuma conta")
        }
    res.status(200).send(contas)
    } 
    catch(error){
    res.send(error.message)
    }
})






app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})