import {Request, Response } from 'express';
import { CreateUserService } from '../../service/users/CreateUserService';

class CreateUserController{
    async handle(req:Request, res:Response){
        const {name_user, email, password, teacher} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name_user, email, password, teacher});
        
        res.json(user)
        return
    }
}

export {CreateUserController}
