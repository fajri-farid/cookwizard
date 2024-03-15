import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   const searchParams = req.nextUrl.searchParams;
  //   const username = searchParams.get("username");

  const allUser = await prisma.users.findFirst();

  return NextResponse.json({
    message: "get all user successfully",
    data: allUser,
  });
}
