import prismaClient from "../../prisma"

interface Training{
    name_training:string,
    created_by: string,
}

class CreateTrainingService{
    async execute({name_training, created_by}: Training){
        const training = await prismaClient.training.create({
            data:{name_training:name_training, created_by:created_by},
            select:{id_training:true, name_training:true, created_by:true}
        })
        return training;
    }
}

export {CreateTrainingService}



