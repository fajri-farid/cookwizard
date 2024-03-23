import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     const { author_id } = req.query; // Ambil author_id dari query parameter
//     const userPosts = await prisma.posts.findMany({
//       where: {
//         author_id: parseInt(author_id), // Sesuaikan dengan struktur database Anda
//       },
//     });
//     return NextResponse.json({ data: userPosts }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user posts:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch user posts" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req) {
//   try {
//     // Lakukan autentikasi pengguna di sini
//     const user = await authenticateUser(req.headers);

//     // Jika autentikasi berhasil, ambil ID pengguna
//     const userId = user.id;

//     // Ambil semua resep yang dibuat oleh pengguna dengan ID yang sesuai
//     const userRecipes = await prisma.posts.findMany({
//       where: {
//         author_id: userId,
//       },
//     });

//     // Kembalikan daftar resep sebagai respons
//     return NextResponse.json({ data: userRecipes }, { status: 200 });
//   } catch (error) {
//     // Tangani kesalahan
//     console.error("Error fetching user recipes:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch user recipes" },
//       { status: 500 }
//     );
//   }
// }

// import prisma from "@/utils/prisma";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     // Lakukan autentikasi pengguna di sini
//     const user = await authenticateUser(req.headers);

//     // Jika autentikasi berhasil, ambil ID pengguna
//     const userId = user.id;

//     // Ambil semua resep yang dibuat oleh pengguna dengan ID yang sesuai
//     const userRecipes = await prisma.posts.findMany({
//       where: {
//         author_id: userId,
//       },
//     });

//     // Kembalikan daftar resep sebagai respons
//     return NextResponse.json({ data: userRecipes }, { status: 200 });
//   } catch (error) {
//     // Tangani kesalahan
//     console.error("Error fetching user recipes:", error);
//     return NextResponse.json(
//       { errorMessage: "Failed to fetch user recipes" },
//       { status: 500 }
//     );
//   }
// }

// // Fungsi untuk melakukan autentikasi pengguna
// async function authenticateUser(headers) {
//   // Misalnya, Anda dapat menggunakan token otentikasi yang dikirim dalam header 'Authorization'
//   const authHeader = headers['authorization'];

//   // Jika header Authorization tidak ada, lemparkan error
//   if (!authHeader) {
//     throw new Error('Authorization header is missing');
//   }

//   // Misalkan format token adalah 'Bearer <token>'
//   const token = authHeader.split(' ')[1];

//   // Di sini Anda dapat memeriksa keaslian token dengan cara yang sesuai dengan sistem otentikasi Anda
//   // Misalnya, Anda dapat memverifikasi token menggunakan library seperti jsonwebtoken atau melakukan validasi di database

//   // Simpan informasi pengguna yang terotentikasi dalam objek user
//   // Di sini, Anda dapat mengembalikan informasi pengguna yang valid atau lemparkan error jika autentikasi gagal
//   // Misalnya, Anda bisa mendapatkan informasi pengguna dari database berdasarkan token
//   const user = await getUserFromToken(token);

//   // Jika autentikasi gagal, lemparkan error
//   if (!user) {
//     throw new Error('Invalid token');
//   }

//   // Jika autentikasi berhasil, kembalikan objek pengguna yang valid
//   return user;
// }

// // Fungsi untuk mendapatkan informasi pengguna dari token otentikasi
// async function getUserFromToken(token) {
//   // Di sini Anda dapat memeriksa keaslian token dengan cara yang sesuai dengan sistem otentikasi Anda
//   // Misalnya, Anda bisa memverifikasi token menggunakan library seperti jsonwebtoken atau melakukan validasi di database

//   // Simulasikan pencarian informasi pengguna dari token
//   // Di sini, Anda bisa mendapatkan informasi pengguna dari database berdasarkan token
//   // Misalnya, dapatkan informasi pengguna dari database berdasarkan token
//   // Ini hanya contoh dan Anda perlu menggantinya dengan implementasi yang sesuai dengan sistem otentikasi Anda
//   const user = await db.findUserByToken(token);

//   // Kembalikan informasi pengguna yang ditemukan, atau null jika token tidak valid
//   return user;
// }
