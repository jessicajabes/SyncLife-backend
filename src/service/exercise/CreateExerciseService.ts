import prismaCliente from '../../prisma'

interface Exercise{
    name_exercise: string,
    description_exercise: string,
}

class CreateExerciseService{
    async execute({name_exercise, description_exercise}:Exercise){

        const exercise = await prismaCliente.exercise.create({
            data:{name_exercise:name_exercise, description_exercise:description_exercise},
           // select:{id_exercise:true, name_exercise:true, description_exercise:true}
        })

        return (exercise);
    }
}

export {CreateExerciseService}


