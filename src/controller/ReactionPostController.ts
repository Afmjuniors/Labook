import { Request, Response } from "express"
import { ReactionPostBusiness } from "../business/ReactionPostBusiness"
import { BaseError } from "../error/BaseError"
import { Reaction } from "../models/Reaction"

export class ReactionPostController{
    public async reactionPost(req: Request, res: Response) {
        try {

            const input = new Reaction(
                 req.params.id,
                 req.body.idPost,  
                 req.body.like 
            )
            const reactionPostBusiness = new ReactionPostBusiness()
            
            const output = reactionPostBusiness.reactionPost(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}