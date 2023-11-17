import { Prisma } from "@prisma/client";
import axios from "axios";
import { log } from "console";
import { NextResponse, NextRequest } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);

        const user = await prisma.user.update({
            where: {
                username: reqBody.username
            },
            data: {
                FullName: (reqBody.firstName + " " + reqBody.lastName),
                phone: reqBody.phone,
                isnew: false
            }
        })
        console.log(user, "***");

        const chat_user = await axios.post(`https://api-${process.env.CHAT_POJECT_KEY}.sendbird.com/v3/users`,
            {
                "user_id": reqBody.username,
                "nickname": reqBody.firstName + " " + reqBody.lastName,
                "profile_url": "https://th.bing.com/th?id=OIP.oj4tzdPec9723b08rhdCxgHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            },
            {
                headers: {
                    'Api-Token': process.env.CHAT_API_TOKEN
                }
            }
        )
        console.log(chat_user);




        return NextResponse.json({
            success: true
        })
    } catch (error: any) {
        console.log(error.message);
    }
}
