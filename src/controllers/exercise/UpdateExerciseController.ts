import { Request,Response } from "express";
import { UpdateExerciseService } from "../../service/exercise/UpdateExerciseService";


class UpdateExerciseController{
    async handle(req:Request, res:Response){
        const {id_exercise, name_exercise, description_exercise} = req.body;
        const updateExerciseService =  new UpdateExerciseService();
        const exercise = await updateExerciseService.execute({id_exercise, name_exercise, description_exercise});
        res.json(exercise)
        return
    }
}

export {UpdateExerciseController}