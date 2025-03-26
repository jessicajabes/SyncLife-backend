import prismaClient from "../../prisma";

interface Exercises{
    id_exerciseoftraining: string,
}

class DeleteExercisesService{
    async execute({id_exerciseoftraining}:Exercises){
        const exercises = prismaClient.exerciseOfTraining.delete({
            where:({id_exerciseoftraining:id_exerciseoftraining}),
        })
        return exercises;
    }
}

export {DeleteExercisesService}