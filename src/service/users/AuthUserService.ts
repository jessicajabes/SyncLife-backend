import prismaClient from '../../prisma'
import{ compare} from 'bcryptjs'
import {sign} from "jsonwebtoken"

interface AuthRequest{
    email: string,
    password: string, 
}

class AuthUserService{
    async Execute({email, password}: AuthRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(!user){
            throw new Error("User/password incorrets")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrets")
        }

        const token = sign(
            {
                name : user.name_user,
                email : user.email,
                teacher : user.teacher
            },process.env.SECRET_KEY,
            {
                subject: user.id_user,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id_user,
            name: user.name_user,
            email:user.email,
            token:token
        };
    }
}

export {AuthUserService}