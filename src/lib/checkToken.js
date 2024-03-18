import * as jose from "jose";
import { cookies } from "next/headers";

export async function checkTokenServerSide(token) {
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    return true; // Token valid
  } catch (error) {
    console.log({ error });
    return false; // Token tidak valid
  }
}
