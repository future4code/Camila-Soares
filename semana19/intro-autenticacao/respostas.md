### Exercício 1

`a)` Acho que tem que ser string,pois o id que é recebido possui número e letras. O formato tem que ser string. Acho que é melhor do que usar somente números,pois a chance de o id ser diferente é maior,se fosse apenas números.

`b)` 

import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
  

### Exercício 2

`a)`  Na primeira linha, é guardado em uma variável o nome da tabela do banco de dados,e dentro dessa variável possui o valor "User" que é cada usuário que vai ser inserido na tabela com os dados (id,name,password). A segunda parte do código que faz o const connection = knex, é a parte que faz a conexão com o nosso banco de dados. Dentro dessa conexão é passado o host,a porta,o usuário,a senha e o nome. A parte final do código é criada uma função de criar um usuário,onde ela é assíncrona. Ela recebe como parâmetro as informações do usuário (id,name,password) e os valores que todos eles vão ser: string. E mostra que esses dados vão ser inseridos na tabela 'userTableName'.

`b)`

CREATE TABLE Usuarios(
id int,
email varchar(50) NOT NULL,
password varchar(50) NOT NULL,
PRIMARY KEY (id)
);

`c)`
import knex from "knex";


const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

const userTableName = "User";

 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

### Exercício 3

`a)` A linha 'as string' diz que a informação do token recebido do JWT_KEY será uma string. Precisamos usar para confirmar que o que vier dentro do JWT_KEY será uma string,para unificar os dados. Pois dentro possui números e letras,a string irá abranger tudo.

`b)` 

import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"

export class Authenticator {
  public generateToken = (
    payload: authenticationData
  ): string => {
    const token = sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: "10h" }
    )
    return token
  }

  export interface authenticationData{
 id: string
}

### Exercício 4

`a)`

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password } = req.body
    if ( !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'nickname', 'password' e 'email'")
    }
   

   if(email !== "@"){
       res.
   }

    const id: string = new IdGenerator().generateId()
    const newUser: user = { id, name, nickname, email, password }
    await connection('usuario')
      .insert(newUser)

    const token = new Authenticator().generateToken({ id })
    res.status(201).send({ newUser, token })
  } 
  catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}


`b)`

  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

`c)`

 if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

### Exercício 5

`a)`
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async (
  req: Request,
  res: Response
) => {
  try {

    const { email, password } = req.body
    const [user] = await connection("to_do_list_users")
      .where({ email })

    if (!user || user.password !== password) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

    const token = new Authenticator().generateToken({
      id: user.id
    })

    res.send({ token })
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.message })
    }
  }
}

### Exercício 6

`a)`

export default async function Login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password } = req.body
    if ( !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos)
    }
   

   if(email !== "@"){
       res.statusCode = 422
   }

    const id: string = new IdGenerator().generateId()
    const newUser: user = { id, name, nickname, email, password }
  
  } 
  catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}

`b)`

try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

### Exercício 7

`a)` A linha as any é necessária,pois quando não coloca o 'any',aparece erros no typescript. É uma forma de não ter erro na tipagem.

`b)`

public getTokenData = (
    token: string
  ): authenticationData | null => {
    try {
      const tokenData = verify(
        token,
        process.env.JWT_KEY
      ) as JwtPayload
      return {
        id: tokenData.id
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

### Exercício 8

`a)`

export default async function Profile(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname } = req.body
      const token = req.headers.authorization
      const tokenData = new Authenticator().getTokenData(token)
      if(!tokenData){
        res.statusCode = 401
        res.statusMessage = "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        throw new Error()
      }
     
     if(!tokenData){
         const result = await connection.raw(`SELECT data_nasc FROM Usuario WHERE id=${req.params.id}`)
     }

    res.send(result[0][0])
      await connection('usuario')
         .update({ email, password })
         .where({ id: tokenData.id })
      res.end()
   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).end()
      }
      res.end()
   }
}

