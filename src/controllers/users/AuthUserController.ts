import {Response, Request} from "express";
import { AuthUserService } from "../../service/users/AuthUserService";

class AuthUserController{
    async handle(req:Request, res:Response){
        const {email, password} = req.body;
        const authUserService = new AuthUserService();
        const login = await authUserService.Execute({email, password});
        res.json(login)
        return
    }   
}

export {AuthUserController}