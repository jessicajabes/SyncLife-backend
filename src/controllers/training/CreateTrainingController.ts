import { Request, Response } from "express";
import { CreateTrainingService } from "../../service/training/CreateTrainingService";

class CreateTrainingController{
    async handle(req:Request, res:Response){
        const {name_training} = req.body;
        const created_by= req.user_id;
        const create_training_service = new CreateTrainingService();
        const training = await create_training_service.execute({name_training, created_by});
        res.json(training)
        return
    }
}

export {CreateTrainingController}