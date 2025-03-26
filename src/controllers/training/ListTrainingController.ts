import { Request,Response } from "express";
import { ListTrainingService } from "../../service/training/ListTrainingService"

class ListTrainingController{
    async handle(req:Request, res:Response){
        const training = await new ListTrainingService().execute();
        res.json(training);
        return;
    }
}

export {ListTrainingController}

