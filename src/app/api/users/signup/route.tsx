import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs";
import { error } from "console";
import { sendEmail } from "@/helpers/mailer";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json()
        console.log(reqBody);
        const {username , email ,password} = reqBody;

        //Checking if the user already exists
        const user = await prisma.user.findUnique({
            where : {
                email : email,
            },
        })

        if(user){
            return NextResponse.json({error : "User alredy exist"} , {status : 400});
        }

        //hash password
        const salt= await bcryptjs.genSalt(10)
        const hashedpassword = await bcryptjs.hash(password , salt);

        // Saving the new user
        const newUser =await prisma.user.create({
            data : {
                email : email ,
                password : hashedpassword, 
                username : username
            }
        })
        
        //send email
        await sendEmail({email ,emailType: "VERIFY" ,userId : user ? user.id : newUser.id}) 

        return NextResponse.json({
            message : "User created successfully",
            success : true
        })

    }catch (error:any){
        return NextResponse.json({error : error.message},{status : 500})
    }
}

