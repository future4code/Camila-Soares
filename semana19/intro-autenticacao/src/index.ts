import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import knex from 'knex'
import dotenv from 'dotenv'
import { v4 } from 'uuid'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor está rodando em http://localhost: ${address.port} `)
    } else {
        console.error(`Falha ao iniciar o servidor`)
    }
})