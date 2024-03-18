import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import * as jose from "jose";
//Style
import HeaderStyle from "@/styles/compStyles/header.module.css";

export const Newhead = async () => {
  let isLoggedIn = false;

  // logic untuk cek token
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookies().get("token")?.value;

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    isLoggedIn = true;
  } catch (error) {
    console.log({ error });
    isLoggedIn = false;
  }

  return (
    <div>
      <div className="h-[80px] bg-cw-background">
        <div className="flex justify-between mx-40">
          <Link href="/">
            <div className="flex space-x-5 mt-2">
              <div>
                <img src="/cw_logo.png" alt="" className="w-[40px]" />
              </div>{" "}
              <div className="text-cw-primary font-cookWiz text-7xl">
                Cook
                <span className="text-cw-secondary font-cookWiz">Wizzard.</span>
              </div>
            </div>
          </Link>
          <div className="flex space-x-10 mt-1">
            {isLoggedIn ? (
              <div className="space-x-10">
                <Link href="/generate-resep" className={HeaderStyle.submenu}>
                  Generate Resep
                </Link>
                <Link href="/profile" className={HeaderStyle.submenu}>
                  Profile
                </Link>
              </div>
            ) : (
              <div className="space-x-10">
                <Link href="/login" className={HeaderStyle.submenu}>
                  Login
                </Link>
                <Link href="/register" className={HeaderStyle.submenu}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
