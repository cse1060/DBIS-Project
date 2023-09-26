import { NextRequest ,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const URL = request.url;
    console.log(URL);
    const urlToken = URL.split("=");
    const userId = urlToken[1];
    const token = urlToken[2];
    const user =await prisma.user.findUnique({
        where : {
            id : parseInt(userId)
        }
    })
    // console.log(user);
    if(token === user.forgotPasswordToken && user.forgotPasswordTokenExpiry > new Date()){
        console.log(user);
        return NextResponse.json(
            {result :true}
        );
    }else{
        return NextResponse.json(
            {result : false}
        );
    }
}

export async function POST(request:NextRequest) {
        try {
            const reqBody = await request.json()
            console.log(reqBody);
            const {userId , password} = reqBody;
        
            const salt= await bcryptjs.genSalt(10)
            const hashedpassword = await bcryptjs.hash(password , salt);

            const user =await prisma.user.update({
                where : {
                    id : parseInt(userId)
                },
                data : {
                    password : hashedpassword,
                    forgotPasswordToken : "",
                    forgotPasswordTokenExpiry : new Date()
                }
            })

            console.log(user);
            return NextResponse.json({
                success : true,
                message : "Password reset successful"
            })
        } catch (error : any) {
            console.log(error.message)
        }

}