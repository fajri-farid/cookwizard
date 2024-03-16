import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  const userId = params.id;
  const { firstName, lastName, username, avatar, deskripsi } = await req.json();

  try {
    const updatedUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        firstName,
        lastName,
        username,
        deskripsi,
        avatar,
      },
    });

    return NextResponse.json(
      {
        message: "User updated successfully",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { errorMessage: "Failed to update user" },
      { status: 500 }
    );
  }
}
