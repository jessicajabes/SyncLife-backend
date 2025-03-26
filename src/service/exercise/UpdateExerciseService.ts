import prismaClient from "../../prisma";

interface Exercise{
    id_exercise :string,
    name_exercise:string,
    description_exercise:string,
}

class UpdateExerciseService{
    async execute({id_exercise, name_exercise, description_exercise}: Exercise){
        const exercise = await prismaClient.exercise.update({
            where:{id_exercise:id_exercise},
            data:{name_exercise:name_exercise, description_exercise:description_exercise},
        })
        return exercise;
    }
}

export {UpdateExerciseService}

