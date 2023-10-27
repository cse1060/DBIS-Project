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