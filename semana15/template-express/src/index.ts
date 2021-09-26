import express , { request, Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'
import { AddressInfo } from 'net'
import { country } from "./types";

const app = express()
app.use(express.json())
app.use(cors())

//Endpoint 1 

app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id:country.id,
        name: country.name
    }))
    try {
        res.status(200).send(result)
        console.log(result)
    }
    catch{
        res.status(200).send
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`server is running in http://localhost: ${address.port}`);

    } else {
        console.error(`failure upon starting server`)
    }
})

// Endpoint 2

app.get('/countries/:id', (req: Request, res: Response) => {


     try {
            if (!Number(req.params.id)) { 
                throw new Error("Invalid id")
            }
  
            const result: country | undefined = countries.find((country) => country.id === Number(req.params.id))
            if (result) {
                res.send(result) 
            } else {
                throw new Error("Not found")
            }
        } catch (error: any) {
            res.status(400).send(error.message)
        }
        })
  

// Endpoint 3

app.get('/countries/search', (req: Request, res: Response) => {

})

// console.log("hello,world")


