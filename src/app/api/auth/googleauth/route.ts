import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function GET(request : NextRequest) {
    const url = request.url;
    const email = url.split("=")[1];
    console.log(email);

    const user = await prisma.user.findUnique({
        where :{
            email : email
        }
    })

    if(!user){
        return NextResponse.json({
            status :false
        })
    }
    const tokenData = {
        id: user.id,
        username : user.username ,
        email : user.email
    }

    const secret = process.env.JWT_SECRET_KEY;
    const tok = jwt.sign(tokenData, secret! , {expiresIn : "2h"});

    const response = NextResponse.json({
        status : (user ? true : false)
    })

    response.cookies.set("token" , tok , {
        httpOnly : true
    })
    return response;

}
export async function POST(request : NextRequest) {
    const reqBody =await request.json();
    const {email , username } = reqBody;

    const user = await prisma.user.create({
        data : {
            email : email ,
            username : username ,
            password : "abc",
            isVerified : true,
        }
    })

    const tokenData = {
        id: user.id,
        username : user.username ,
        email : user.email
    }

    const secret = process.env.JWT_SECRET_KEY;
    const tok = jwt.sign(tokenData, secret! , {expiresIn : "2h"});

    const response = NextResponse.json({
        message : "User Creation Successful",
        status : 500
    })

    response.cookies.set("token" , tok , {
        httpOnly : true
    })
    return response;
}