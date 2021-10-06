import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let title = req.query.title;
      let sort = req.query.sort as string;
      let order= req.query.order as string;
      let page = Number(req.query.page);
   
      if(page <1 || isNaN(page)){
         page = 1;
      }
      const size = 2;
      const offset = size * (page-1);

      //queremos receber por qual coluna vamos ordenar, e também saber como se dará essa ordenação
      console.log(req.query);

      if(title === ""){
         throw new Error("O valor de 'title' não foi informado.");
      }

      if(sort !== "title" && sort !== "created_at"){
         sort = "title";
      }

      if(order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
         order = "ASC";
      }

      // const totalItems = await connection.raw(`SELECT COUNT(*) as total from aula49_recipes`);
      // const numberOfPages = totalItems[0][0].total/size;


      const result = await connection("aula49_recipes")
      .where('title', 'like', `%${title}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset);

      //where {chave: valor}; WHERE chave = 'valor'; WHERE title = ${title}
      

      const recipes = result.map(toRecipe);

      if(recipes.length<1){
         throw new Error("Não foram encontradas receitas com os valores enviados.");
      }


      res.status(200).send(recipes)

   } catch (error: any) {
         console.error(error.message);
      res.status(422).send({
         message: error.message
      })
   }
}

const toRecipe = (input: any): recipe => {
   return input && {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}