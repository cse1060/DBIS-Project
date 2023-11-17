import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = await request.json();
    // console.log(await request.json());


    const { city, budget, subtype, rooms } = data;

    var properties;
    if (subtype.length > 0) {
        properties = await prisma.residential_Property.findMany({
            where: {
                for_sale: true,
                Property: {
                    where: {
                        city: city,
                        subType: subtype
                    }
                },
                rooms: {
                    lt: rooms
                },
                sale_amount: {
                    lt: budget
                }
            },
            include: {
                Property: true
            }
        });
    } else {
        properties = await prisma.residential_Property.findMany({
            where: {
                for_sale: true,
                Property: {
                    every: {
                        city: city
                    }
                },
                rooms: {
                    lt: rooms,
                },
                sale_amount: {
                    lt: budget
                }
            },
            include: {
                Property: true
            }
        });
    }

    console.log(properties);


    return NextResponse.json({
        success: true,
        property: properties
    })
}

