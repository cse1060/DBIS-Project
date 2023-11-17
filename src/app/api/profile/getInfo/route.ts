import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    try {


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

        let imagesOwned: any[] = [];

        properties_owned.map(async (obj: any) => {
            console.log(obj.Property[0].id)
            const image = await prisma.images.findMany({
                where: {
                    property_id: obj.Property[0].id
                }
            })

            imagesOwned.push(image)
        })

        const properties_liked = await prisma.user_Profile.findMany({
            where: {
                user_id: parseInt(user.id),
                isliked: true
            },
            include: {
                Property: true,
            }
        })

        let imagesLiked: any[] = [];

        properties_liked.map((obj: any) => {
            const image = prisma.images.findUnique({
                where: {
                    property_id: obj.Property[0].id
                }
            })

            imagesLiked.push(image)
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
        let imagesVisited: any[] = [];

        properties_visited.map((obj: any) => {
            const image = prisma.images.findUnique({
                where: {
                    property_id: obj.Property[0].id
                }
            })

            imagesVisited.push(image)
        })

        console.log(user);

        return NextResponse.json({
            user: user,
            owned: properties_owned,
            liked: properties_liked,
            visited: properties_visited,
            imagesOwned: imagesOwned,
            imagesLiked: imagesLiked,
            imagesVisited: imagesVisited
        });
    } catch (error) {

    }
}