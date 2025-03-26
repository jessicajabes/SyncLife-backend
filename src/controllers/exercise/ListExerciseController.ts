import { Request, Response } from "express";
import { ListExerciseService } from "../../service/exercise/ListExerciseService";

class ListExerciseController{
    async handle(req:Request, res:Response){

        const listExerciseService = new ListExerciseService();
        const exercise = await listExerciseService.execute();
        res.json(exercise)
        return
    }
}

export {ListExerciseController}