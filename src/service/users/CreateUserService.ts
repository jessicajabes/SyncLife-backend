import prismaCliente from '../../prisma';
import { hash } from 'bcryptjs'


interface UserRequest{
    name_user: string;
    password: string;
    teacher:boolean;
    email:string;
}

class CreateUserService{
    async execute({name_user, email, password, teacher}: UserRequest){

        const userAlreadyExists = await  prismaCliente.user.findFirst({
            where:{
                name_user : name_user
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const emailAlreadyExists = await  prismaCliente.user.findFirst({
            where:{
                email : email
            }
        })

        if(emailAlreadyExists){
            throw new Error("E-mail already exists")
        }

        const passwordHash = await hash(password,8)

        const user = await prismaCliente.user.create({
            data:{
                name_user:name_user,
                password:passwordHash,
                teacher:teacher,
                email:email,
            },
            select:{
                id_user: true,
                name_user: true,       
                email: true,
                teacher: true
            }
        })

        return{user};
    }
}

export {CreateUserService}