import prismaClient from "../../prisma";

interface ExerciseOfTraining{
    exercise_id: string,
    training_id: string,
    block: number,
    repeat: string,
    description: string,
}

class CreateExercisesService{
    async execute({exercise_id, training_id, block, repeat, description}: ExerciseOfTraining){

        const exercises = prismaClient.exerciseOfTraining.create({
            data:{exercise_id:exercise_id, training_id:training_id, block:block, repeat:repeat, description:description}
        })
        return exercises;
    }
}

export {CreateExercisesService}

