import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req) {
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    return NextResponse.next();
  } catch (error) {
    console.log({ error });
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/generate-resep/:path"],
};
