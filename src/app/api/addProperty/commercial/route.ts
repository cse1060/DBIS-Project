import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();

        const images = reqBody.images;

        const commercials = await prisma.commercial_Property.findMany();

        const id = parseFloat(commercials.length + 1)
        // console.log(id);

        const details = await prisma.commercial_Property.create({
            data: {
                garages: reqBody.property.garages,
                floors: reqBody.property.floors,
                area: reqBody.property.area,
                for_sale: reqBody.property.for_sale,
                for_rent: reqBody.property.for_rent,
                sale_amount: reqBody.property.sale_amount,
                rent_amount: reqBody.property.rent_amount,
                id: id
            }
        })

        console.log(images);

        images.map(async (img: any, id: any) => {
            const savedImg = await prisma.images.create({
                data: {
                    property_id: reqBody.property.property_id,
                    url: img
                }
            })
            console.log(savedImg);

        })

        console.log(details);

        const property = await prisma.property.update({
            where: {
                id: parseInt(reqBody.property.property_id)
            },
            data: {
                Commercial_Property_id: details.id,
                name: reqBody.property.name,
                address: reqBody.property.address,
                latitude: reqBody.property.latitude,
                longitude: reqBody.property.longitude,
                description: reqBody.property.description,
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
