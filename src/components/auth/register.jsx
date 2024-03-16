"use client";

import Link from "next/link";
import { useState } from "react";
//Styles
import registerStyle from "@/styles/compStyles/register.module.css";
import { Footer } from "../sharedUI/Footer";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    const { firstName, lastName, username, email, password } = registerData;

    if (!firstName || !lastName || !username || !email || !password) {
      console.log("All fields must be filled");
      return; // di return supaya next codenya tidak di eksekusi
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main>
      {/* <div className="font-medium tracking-tight text-base">CookWizard.</div> */}
      <div>
        <div className="w-fit flex space-x-32">
          <div>
            <img src="/auth/img_register.png" alt="" className="w-[950px] " />
          </div>
          <div className="w-[970px]">
            <div className="w-fit m-auto mt-32">
              <div className="mt-10 mb-5">
                <div className="font-cookWiz text-cw-background text-8xl">
                  Register
                </div>
                <div className="font-cookWiz text-cw-background text-6xl -mt-5">
                  Create an account for CookWizard.
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChangeInput}
                    className={registerStyle.inputStyle}
                  />
                  <input
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChangeInput}
                    className={registerStyle.inputStyle}
                  />
                </div>
                <input
                  name="Username"
                  placeholder="Username"
                  onChange={handleChangeInput}
                  className={registerStyle.inputStyle}
                />
                <input
                  name="email"
                  placeholder="email@domain.com"
                  onChange={handleChangeInput}
                  className={registerStyle.inputStyle}
                />
                <input
                  name="password"
                  placeholder="Password"
                  onChange={handleChangeInput}
                  className={registerStyle.inputStyle}
                />
                <div className="w-fit m-auto">
                  <button
                    className={registerStyle.buttonStyle}
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <div className="font-cookWiz text-5xl">
                  Have an account ?{" "}
                  <Link href="/login" className="link font-cookWiz text-5xl">
                    <span className="font-cookWiz">Login</span>
                  </Link>
                </div>
                <div className="w-fit m-auto mt-10 font-cookWiz text-5xl">
                  <Link href="/" className="link">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
