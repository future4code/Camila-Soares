import express, { Response, Request } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import knex from 'knex'

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getAllRecipes)


export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
   `)

   return result[0]
}


//Exercício 1
//a)



export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})