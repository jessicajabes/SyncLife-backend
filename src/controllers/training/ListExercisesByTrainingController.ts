import { Request,Response } from "express";
import { ListExercisesByTrainingService } from "../../service/training/ListExercisesByTrainingService";

class ListExercisesByTrainingController{
    async handle(req:Request, res:Response){
        const training_id = req.query.training_id as string;
        const exercises = await new ListExercisesByTrainingService().execute({training_id})
        res.json(exercises)
        return
    }
}

export {ListExercisesByTrainingController}





