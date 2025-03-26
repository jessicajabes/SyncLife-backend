import { Request, Response } from 'express';
import { CreateExerciseService } from '../../service/exercise/CreateExerciseService';

class CreateExerciseController{
    async handle(req: Request, res:Response){
        const {name_exercise, description_exercise} = req.body;
        const createExerciseService = new CreateExerciseService();
        const exercise = await createExerciseService.execute({name_exercise, description_exercise});
        res.json(exercise)
        return
    }
}

export {CreateExerciseController}
