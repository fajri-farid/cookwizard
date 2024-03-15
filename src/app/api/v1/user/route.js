import prisma from "@/utils/prisma";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const username = searchParams.get("username");

    
}
