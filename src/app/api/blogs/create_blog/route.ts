import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    const userId = await getDataFromToken(request);

    const { title, body, imgurl } = reqBody;

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    console.log(user);

    const blog = await prisma.blog.create({
        data:
        {
            user_id: user.id,
            user_name: user.username,
            user_img: "https://th.bing.com/th?id=OIP.jPpVGcIUih5YWhUYbSKcwgHaHk&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            title: title,
            body: body,
            imgurl: imgurl
        }
    })

    console.log(blog);

    const response = NextResponse.json({
        message: "user craeted successfully",
        success: true
    })

    return response;
}