import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    // var imgurl = "https://th.bing.com/th?id=OIP.cjEjhUwGUru8p4eOUhfrawHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"

    const blogs = await prisma.blog.findMany();
    // return NextResponse.json({ blogs: [{ user: "Param", title: "hello", body: "Hello", img: imgurl, date: (new Date) }] })
    return NextResponse.json({
        blogs: blogs
    })
}
