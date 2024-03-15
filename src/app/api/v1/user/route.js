import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";
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

export async function DELETE(req, { params }) {
  const postId = params.id;
  console.log("postId:", postId);

  await prisma.posts.delete({
    where: {
      id: postId,
    },
  });
  return NextResponse.json({ message: "Post deleted successfully" });
}

// export async function getMyRecipes(authorId) {
//   try {
//     const myRecipes = await prisma.posts.findMany({
//       where: {
//         author_id: authorId,
//       },
//     });
//     return myRecipes;
//   } catch (error) {
//     console.error("Error fetching my recipes:", error);
//     return [];
//   }
// }

// export async function GET(req) {
//   try {
//     let posts;
//     if (req.query && req.query.author_id) {
//       const authorId = req.query.author_id;
//       posts = await prisma.posts.findMany({
//         where: {
//           author_id: authorId,
//         },
//       });
//     } else {
//       posts = await prisma.posts.findMany();
//     }
//     return NextResponse.json({ data: posts }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch posts" },
//       { status: 500 }
//     );
//   }
// }

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
