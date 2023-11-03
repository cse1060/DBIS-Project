import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const reqBody = await request.json();

    const username = reqBody.id;

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    const properties_owned = await prisma.user_Profile.findMany({
        where: {
            user_id: parseInt(user.id),
            isOwned: true
        },
        include: {
            Property: true
        }
    })
    const properties_liked = await prisma.user_Profile.findMany({
        where: {
            user_id: parseInt(user.id),
            isliked: true
        },
        include: {
            Property: true
        }
    })
    const properties_visited = await prisma.user_Profile.findMany({
        where: {
            user_id: parseInt(user.id),
            isVisited: true
        },
        include: {
            Property: true
        }
    })

    console.log(user);

    return NextResponse.json({
        user: user,
        owned: properties_owned,
        liked: properties_liked,
        visited: properties_visited
    });
}