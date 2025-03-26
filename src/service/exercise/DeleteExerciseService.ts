import prismaClient from "../../prisma";

interface Exercise{
    id_exercise :string,
}

class DeleteExerciseService{
    async execute({id_exercise}:Exercise){
        const exercise = await prismaClient.exercise.delete({
            where:{id_exercise:id_exercise}
        })
        return exercise;
    }
}

export {DeleteExerciseService}

