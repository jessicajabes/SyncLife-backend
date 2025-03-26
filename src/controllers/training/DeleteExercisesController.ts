import { Request,Response } from "express";
import { DeleteExercisesService } from "../../service/training/DeleteExercisesService";


class DeleteExercisesController{
    async handle(req:Request, res:Response){
        const id_exerciseoftraining = req.query.id_exerciseoftraining as string;
        const exercises = await new DeleteExercisesService().execute({id_exerciseoftraining});
        res.json(exercises);
        return;
    }
}

export {DeleteExercisesController}