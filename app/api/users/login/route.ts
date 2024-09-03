import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, tbl_user } from "@prisma/client";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

interface Login {
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { email, password }: Login = await req.json();
    const checkUser = await prisma.tbl_user.findFirst({
      where: {
        email: email,
      },
    });
    if (!checkUser) {
      return NextResponse.json({
        status: 400,
        message: "User not found",
      });
    }
    const comparePassword = await bcrypt.compare(password, checkUser.password);
    if (!comparePassword) {
      return NextResponse.json({
        status: 400,
        message: "Wrong password",
      });
      }
      return NextResponse.json({
          status: 200,
          message: "Success Login",
          data: {
            checkUser,
          }
      })
  } catch (error) {
      return NextResponse.json({
          status: 400,
          message: "Bad Request",
          error: error,
      })
  }
}
