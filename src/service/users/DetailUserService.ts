import prismaClient from "../../prisma"


class DetailUserService{
    async execute(user_id:string){
        const user = await prismaClient.user.findFirst({
            where: {id_user: user_id},
            select: {id_user:true, name_user:true, email:true, teacher:true},
        })
        return {user};
    }
}

export {DetailUserService}