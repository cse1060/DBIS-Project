const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import jwt from "jsonwebtoken";

import { NextResponse , NextRequest } from "next/server"

export async function POST(request : NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const {userId , token} = reqBody
        console.log(userId);
        console.log(token);

        var user = await prisma.user.findUnique({
            where : {
                id : userId ,
            }
        })

        if(!user || user.verifyToken != token || user.verifyTokenExpiry < new Date()){
            return NextResponse.json({
                error : "User not found",
                status : 400
            })
        }

        user = await prisma.user.update({
            where : {
                id : userId,
            },
            data  :{
                isVerified : true,
                verifyToken : "",
                verifyTokenExpiry : new Date()
            }
        })

        console.log(user);    

        const response = NextResponse.json({
            message : "Email Verification Successful",
            status : 500
        })
        return response;
    } catch (error:any) {
        console.log(error);
    }
}