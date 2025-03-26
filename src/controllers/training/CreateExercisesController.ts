import { Request,Response } from "express";
import { CreateExercisesService } from "../../service/training/CreateExercisesService";

class CreateExercisesController{
    async handle(req:Request, res:Response){
        const {exercise_id, training_id, block, repeat} = req.body;
        res.json(await new CreateExercisesService().execute({exercise_id,training_id,block,repeat}))
        return
    }
}

export {CreateExercisesController}

