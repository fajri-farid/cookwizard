import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

// export async function GET(req) {
//   //   const searchParams = req.nextUrl.searchParams;
//   //   const username = searchParams.get("username");

//   const allUser = await prisma.users.findFirst();

//   return NextResponse.json({
//     message: "get all user successfully",
//     data: allUser,
//   });
// }

// export async function GET(req) {
//   try {
//     const allPosts = await prisma.posts.findMany();
//     return NextResponse.json({ data: allPosts }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching all posts:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch all posts" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  const { dishTitle, desc, ingredients, recipe, author_id } = await req.json();
  const id = nanoid();

  try {
    const postResep = await prisma.posts.create({
      data: {
        id,
        dishTitle,
        desc,
        ingredients: ingredients.join("\n"),
        recipe: recipe.join("\n"),
        author_id,
      },
    });
    console.log(postResep);

    return NextResponse.json(
      { message: "create resep successfully", data: postResep },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { errorMessage: "Failed to create resep" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    console.log(id);

    let user;
    if (id) {
      user = await prisma.users.findUnique({
        where: {
          id: id,
        },
      });
    } else {
      user = await prisma.users.findMany();
    }

    return NextResponse.json(
      {
        message: "Get user successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { errorMessage: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  const userId = params.id;
  const { firstName, lastName, username, email, deskripsi } = await req.json();

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
