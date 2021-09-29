import express, { Express, Response, Request } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import knex from 'knex'
import dotenv from 'dotenv'

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multiStatements: true
    }

})


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE id = '${id}`)
    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try{
    const id = req.params.id

    console.log(await getActorById(id))
    
    res.end()

    } catch(error) {
        // console.log(error.message)
        res.status(500).send("Erro inesperado")
    }
})

//Função que busca ator pelo nome

const searchName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)
    return result
}


// Função recebe gender e retorna qtd itens Actor

const getGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`)

    return result
}




const server = app.listen(process.env.PORT || 3003,() => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor está rodando em http://localhost: ${address.port}`)
    } else {
        console.error(`Falha ao iniciar o servidor`)
    }

})
