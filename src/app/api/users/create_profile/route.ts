import { Prisma } from "@prisma/client";
import { log } from "console";
import { NextResponse, NextRequest } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);

        const user = await prisma.user.update({
            where: {
                username: reqBody.username
            },
            data: {
                FullName: (reqBody.firstName + " " + reqBody.lastName),
                phone: reqBody.phone,
                isnew: false
            }
        })

        console.log(user);


        return NextResponse.json({
            success: true
        })
    } catch (error: any) {
        console.log(error.message);
    }
}
