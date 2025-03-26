import { Request,Response } from "express";
import { DeleteExerciseService } from "../../service/exercise/DeleteExerciseService";


class DeleteExerciseController{
    async handle(req:Request, res:Response){
        const id_exercise = req.query.id_exercise as string;
        const exercise = await new DeleteExerciseService().execute({id_exercise});
        res.json(exercise)
        return 
    }
}

export {DeleteExerciseController}