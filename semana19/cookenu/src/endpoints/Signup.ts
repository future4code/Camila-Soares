import { connection } from "../data/connection"
import express, { Request, Response } from "express";
import { user } from '../types'

export const Signup = ( async (req:Request,res:Response) => {
    
    try{

    const {password} = req.body

    if(password.length < 6){
        res.statusCode = 422
        throw new Error ("Preencha a senha com mais caracteres, o campo deve conter no mínimo 6 caracteres")
    } 


    await connection.raw(`INSERT INTO Usuario(name,email,password)
    VALUES ("${req.body.name}",
        "${req.body.email}",
        "${req.body.password}")
    `)
    res.send("Usuário Adicionado com Sucesso!")
    }catch(error){
        console.log(error)
        res.status(500).send("Error")
    }
})