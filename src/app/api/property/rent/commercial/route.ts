import { NextRequest, NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = await request.json();
    // console.log(await request.json());


    const { city, budget, subtype, area } = data;

    var properties;
    if (subtype.length > 0) {
        properties = await prisma.commercial_Property.findMany({
            where: {
                for_rent: true,
                Property: {
                    where: {
                        city: city,
                        subType: subtype
                    }
                },
                rent_amount: {
                    lt: budget
                }, area: {
                    lt: area
                }
            },
            include: {
                Property: true
            }
        });
    } else {
        properties = await prisma.commercial_Property.findMany({
            where: {
                for_rent: true,
                Property: {
                    every: {
                        city: city
                    }
                },
                rent_amount: {
                    lt: budget
                }, area: {
                    lt: area
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

