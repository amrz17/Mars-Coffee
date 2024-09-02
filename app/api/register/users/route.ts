import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, tbl_user } from "@prisma/client";

const prisma = new PrismaClient();

interface Register {
    name: string,
    email: string,
    password: string,
    points?: Number
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const { name, email, password }: Register = await request.json();

        const prismaGetUsers: tbl_user[] = await prisma.tbl_user.findMany();
        const checkEmail = prismaGetUsers.find((user) => user.email === email);
        if (checkEmail) {
            return NextResponse.json({
                status: 400,
                message: "Email already exist",
            })
        }
        const prismaCreateUser: tbl_user = await prisma.tbl_user.create({
            data: {
                name,
                email,
                password,
            }
        })
        return NextResponse.json({
            status: 200,
            message: "Success Create User",
            data: prismaCreateUser,
        });
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "Bad Request",
            error: error,
        })
    }
}