import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();

        const commercials = await prisma.commercial_Property.findMany();

        const id = parseFloat(commercials.length + 1)
        // console.log(id);

        const details = await prisma.commercial_Property.create({
            data: {
                garages: reqBody.garages,
                floors: reqBody.floors,
                area: reqBody.area,
                // description: reqBody.description,
                for_sale: reqBody.for_sale,
                for_rent: reqBody.for_rent,
                sale_amount: reqBody.sale_amount,
                rent_amount: reqBody.rent_amount,
                id: id
            }
        })

        console.log(details);
        console.log(reqBody.property_id);

        const property = await prisma.property.update({
            where: {
                id: parseInt(reqBody.property_id)
            },
            data: {
                Commercial_Property_id: details.id
            }
        })

        console.log(property);

        return NextResponse.json({
            status: "success"
        })
    } catch (error) {
        console.log(error)
    }

}

export async function GET(request: NextRequest) {
    return NextResponse.json({
        status: "success"
    })
}
