import { Request,Response } from "express";
import { UpdateExercisesService } from "../../service/training/UpdateExercisesService";


class UpdateExercisesController{
    async handle(req:Request, res:Response){
        const {id_exerciseoftraining, exercise_id, training_id, block, repeat, description} = req.body;
        const exercises = await new UpdateExercisesService().execute({id_exerciseoftraining, exercise_id, training_id, block, repeat, description});
        res.json(exercises)
        return 
    }
}

export {UpdateExercisesController}