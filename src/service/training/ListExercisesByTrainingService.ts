import prismaClient from "../../prisma";

interface ExercisesRequest{
  training_id: string;
}

class ListExercisesByTrainingService{
    async execute({training_id}: ExercisesRequest){
        const findByTraining = await prismaClient.exerciseOfTraining.findMany({
            where:{training_id:training_id},
            include:{training: true, exercise:true}
        })

        return findByTraining;
    }
}

export {ListExercisesByTrainingService}




