import prismaClient from "../../prisma";

interface ExerciseOfTraining{
    exercise_id: string,
    training_id: string,
    block: number,
    repeat: number,
}

class CreateExercisesService{
    async execute({exercise_id, training_id, block, repeat}: ExerciseOfTraining){

        const exercises = prismaClient.exerciseOfTraining.create({
            data:{exercise_id:exercise_id, training_id:training_id, block:block, repeat:repeat}
        })
        return exercises;
    }
}

export {CreateExercisesService}

