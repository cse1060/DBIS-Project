import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest ,NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(request : NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user =await prisma.user.findUnique({
            where : {
                id : userId,
            },
        })
        return NextResponse.json({
            message : "User Found",
            data : user
        })
    } catch (error:any) {
        console.log(error.message);
    }
}