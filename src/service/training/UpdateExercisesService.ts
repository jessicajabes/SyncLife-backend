import prismaClient from "../../prisma";

interface ExerciseOfTraining{
    id_exerciseoftraining: string,
    exercise_id: string,
    training_id: string,
    block: number,
    repeat: number,
}

class UpdateExercisesService{
    async execute({id_exerciseoftraining, exercise_id, training_id, block, repeat}: ExerciseOfTraining){
        const training = prismaClient.exerciseOfTraining.update({
            where:({id_exerciseoftraining:id_exerciseoftraining}),
            data:({exercise_id:exercise_id, training_id:training_id, block:block, repeat:repeat}),
        })
        return training;
    }
}

export {UpdateExercisesService}