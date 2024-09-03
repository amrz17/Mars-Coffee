import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, tbl_user } from "@prisma/client";

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const saltRounds = 10;

interface Register {
  name: string;
  email: string;
  password: string;
  points?: number;
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
      });
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const prismaCreateUser: tbl_user = await prisma.tbl_user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });
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
    });
  }
}
