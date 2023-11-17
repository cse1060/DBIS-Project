import { NextRequest, NextResponse } from "next/server";
import { comment } from "postcss";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const reqBody = await request.json();

    const { id } = reqBody;
    console.log(id);


    let property = await prisma.property.findUnique({
        where: {
            id: parseFloat(id)
        }
    });

    console.log(property);

    var details

    if (property.Property_Type === 'commercial') {
        details = await prisma.commercial_Property.findUnique({
            where: {
                id: property.Commercial_Property_id
            }
        })
        console.log(details);

        return NextResponse.json({
            success: true,
            property: property,
            details: details
        })


    } else if (property.Property_Type === 'residential') {
        details = await prisma.residential_Property.findUnique({
            where: {
                id: property.Residential_Property_id
            }
        })

        console.log(details);
    }

    const user = await prisma.user.findUnique({
        where: {
            id: property.agent_id
        }
    })

    const images = prisma.images.findMany({
        where: {
            property_id: parseInt(id)
        }
    })

    const comments = await prisma.comments.findMany({
        where: {
            prop_id: parseInt(id)
        }
    })

    // comments.map(await(comment : any, idx : any) => {
    //     let writer = await prisma.user.findUnique({
    //         where : {
    //             id : comment.
    //         }
    //     })

    //     writers.push(writer)
    // })

    async function getWriters(comments: any) {
        let writers: any[] = [];
        for (var i = 0; i < comments.length; i += 1) {
            let writer = await prisma.user.findUnique({
                where: {
                    id: comments[i].user_id
                }
            })
            writers.push(writer)
        }
        return writers
    }

    const writers = await getWriters(comments)

    console.log(comments);
    console.log(writers);
    console.log(user);


    return NextResponse.json({
        success: true,
        property: property,
        details: details,
        user: user,
        comments: comments,
        writer: writers,
        images: images
    })

}