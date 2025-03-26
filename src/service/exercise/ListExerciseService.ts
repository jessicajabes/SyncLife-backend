import prismaClient from "../../prisma";



class ListExerciseService{
    async execute(){
        const exercise = await prismaClient.exercise.findMany({
            select:{id_exercise:true, name_exercise:true, description_exercise:true},
            orderBy:{name_exercise: 'asc',}
        })
        return exercise;
    }
}

export {ListExerciseService}

