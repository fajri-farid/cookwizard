import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

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

// export async function GET(req, { params }) {
//   try {
//     // Pastikan hanya mengambil pos milik pengguna yang masuk
//     const author_id = params.author_id;

//     // Mengambil semua pos milik pengguna berdasarkan author_id
//     const userPosts = await prisma.posts.findMany({
//       where: {
//         author_id: author_id, // Sesuaikan dengan struktur database Anda
//       },
//     });

//     return NextResponse.json({ data: userPosts }, { status: 200 }); // Mengembalikan pos pengguna dalam respons JSON
//   } catch (error) {
//     console.error("Error fetching user posts:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch user posts" },
//       { status: 500 }
//     ); // Menangani kesalahan dan mengembalikan respons kesalahan jika terjadi
//   }
// }

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
