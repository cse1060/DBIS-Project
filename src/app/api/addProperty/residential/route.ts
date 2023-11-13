import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();
        // const userId = await getDataFromToken(request);


        const residentials = await prisma.residential_Property.findMany();
        // console.log(residentials, "***");

        const id = parseFloat(residentials.length + 1)
        // console.log(id);

        const images = reqBody.images;

        const details = await prisma.residential_Property.create({
            data: {
                rooms: reqBody.property.rooms,
                balconies: reqBody.property.balconies,
                area: reqBody.property.area,
                for_sale: reqBody.property.for_sale,
                for_rent: reqBody.property.for_rent,
                description: reqBody.property.description,
                sale_amount: reqBody.property.sale_amount,
                rent_amount: reqBody.property.rent_amount,
                id: id
            }
        })

        // console.log(details);
        // console.log(reqBody.property.property_id);

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

        const property = await prisma.property.update({
            where: {
                id: parseInt(reqBody.property.property_id)
            },
            data: {
                Residential_Property_id: details.id,
                name: reqBody.property.name,
                address: reqBody.property.address,
                latitude: reqBody.property.latitude,
                longitude: reqBody.property.longitude,
                description: reqBody.property.description
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
