import prisma from "@/utils/prisma";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { dishTitle, desc, ingredients, recipe, author_id } = await req.json();
  const id = nanoid();

  try {
    const postResep = await prisma.posts.create({
      data: {
        id,
        dishTitle,
        desc,
        ingredients: ingredients.join(", "),
        recipe: recipe.join(", "),
        author_id,
      },
    });
    console.log(postResep);

    // Kembalikan respons setelah postResep berhasil dibuat
    return NextResponse.json(
      { message: "create resep successfully", data: postResep },
      { status: 201 }
    );
  } catch (error) {
    // Tangani kesalahan
    console.error(error);
    return NextResponse.json(
      { errorMessage: "Failed to create resep" },
      { status: 500 }
    );
  }
}
