import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const userId = await getDataFromToken(request);
        const { action, type, subType, city } = reqBody;

        console.log(userId);

        const property = await prisma.property.create({
            data: {
                agent_id: userId,
                date_added: new Date(),
                city: city,
                Property_Type: type,
                action: action,
                subType: subType
            }
        })

        const userProfile = await prisma.user_Profile.create({
            data: {
                prop_id: property.id,
                user_id: userId,
                isOwned: true
            }
        })
        console.log(property);

        return NextResponse.json({
            status: "success",
            propertyId: property.id
        })
    } catch (error: any) {
        console.log(error);
    }

}

export async function GET(request: NextRequest) {
    const URL = request.url;
    console.log(URL);
    const data = URL.split("=");
    const property_id = data[1];

    const property = await prisma.property.findUnique({
        where: {
            id: parseInt(property_id)
        }
    })

    console.log(property);

    if (property !== null) {
        return NextResponse.json({
            action: property.action,
            type: property.Property_Type,
            subType: property.subType,
        })
    } else {
        return NextResponse.json({
            success: false
        })
    }

}