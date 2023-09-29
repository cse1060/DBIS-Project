import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs";
import 'dotenv/config'
import jwt from "jsonwebtoken";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request:NextRequest){
    try {
        
        const reqBody =await request.json();
        const {email , password} = reqBody;
        console.log(reqBody);

        const user =await prisma.user.findUnique({
            where : {
                email : email,
            },
        })

        if(!user){
            return NextResponse.json({error : "User does not exist"} , {status : 400})
        }
        const validPassword = await bcryptjs.compare(password , user.password)
        if(!validPassword){
            return NextResponse.json({error : "Invalid Password"} , {status : 400})
        }

        // //create token data
        const tokenData = {
            id: user.id,
            username : user.username ,
            email : user.email
        }

        //create token
        const secret = process.env.JWT_SECRET_KEY;
        var token = jwt.sign(tokenData, secret! , {expiresIn : "2h"});

        const response = NextResponse.json({
            message : "Login Successful",
            status : 500
        })

        response.cookies.set("token" , token , {
            httpOnly : true
        })

        return response;

    } catch (error :any) {
        return NextResponse.json({
            status : 500
        })
    }
}