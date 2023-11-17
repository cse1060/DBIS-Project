import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {

    const reqBody = await request.json();

    const { id, likes, dislikes } = reqBody
    console.log(reqBody);


    const blog = await prisma.blog.update({
        where: {
            blog_id: id
        },
        data: {
            likes: likes,
            dislikes: dislikes
        }
    })

    console.log(blog);


    return NextResponse.json({
        success: true
    })
}