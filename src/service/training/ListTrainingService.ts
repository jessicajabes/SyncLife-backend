import prismaClient from "../../prisma";

class ListTrainingService{
    async execute(){
        const training = prismaClient.training.findMany({
            select:({id_training:true, name_training:true, created_by:true})
        })
        return training;
    }
}

export {ListTrainingService}