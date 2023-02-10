import { Request, Response } from "express";
import { ReactionPostBusiness } from "../business/ReactionPostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../error/BaseError";

export class UserController {
    constructor(
        private userBusiness: UserBusiness,
        private reactionPostBusiness : ReactionPostBusiness
    ){}

    public async signUp(req: Request, res: Response) {
        try {
            const input = req.body

            const output =await  this.userBusiness.signUp(input)          
        
            res.status(201).send(output)
            
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
            
        }
      
    }

    public async login(req: Request, res: Response) {
        try {
            const input = req.body
            const userBusiness = new UserBusiness()

            const output = await userBusiness.login(input)
    
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

    public async viewAllUsers(req: Request, res: Response) {
        try {
           const userBusiness = new UserBusiness()

           const output = await userBusiness.viewAllUsers()

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

    public async reactionPost(req: Request, res: Response) {
        try {

            const input={
                idUser: req.params.id,
                idPost: req.body.idPost,  
                like: req.body.like 
            }
            
            const output = await this.reactionPostBusiness.reactionPost(input)

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
 




