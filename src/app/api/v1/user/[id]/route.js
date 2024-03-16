import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import { NextResponse } from "next/server";
import slugify from "slugify";

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

    // Upload image
    try {
      // satu gambar
      if (avatar) {
        await uploadFile({
          Body: avatar,
          Key: avatar.name,
          ContentType: avatar.type,
          Dir: `avatar/${userId}`, // Gunakan userId yang didapat dari params.id;
        });
        console.log("berhasil di masukkan");
      }
    } catch (error) {
      console.log(error);
    }

    console.log({
      firstName,
      lastName,
      username,
      deskripsi,
      avatar,
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
