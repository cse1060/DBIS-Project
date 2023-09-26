import { Prisma } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";
import { sendEmail } from "@/helpers/mailer";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(request : NextRequest){
    try {
        const reqBody = await request.json();
        const email = (reqBody.email).toString();
        console.log(email);

        const user = await prisma.user.findUnique(
            {
                where : {
                    email : email
                }
            }
        )
        console.log(user);
        if(!user){
            console.log("User does not exist");
        }

        sendEmail({email : email ,emailType : "RESET" ,userId : user.id});

        return NextResponse.json({
            status : "successful"
        })
    } catch (error:any) {
        console.log(error.message);
    }
}
    