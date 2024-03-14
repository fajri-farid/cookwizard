"use client";

import Link from "next/link";
import { useState } from "react";

//Styles
import registerStyle from "@/styles/compStyles/register.module.css";

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
    <main className="space-y-6 px-[20vh] pt-10">
      {/* <div className="font-medium tracking-tight text-base">CookWizard.</div> */}
      <div className="flex justify-evenly">
        <div>
          <img src="/auth/img_register.png" alt="" className="w-[615px]" />
        </div>
        <div>
          <div className="mb-5">
            <h1 className="font-cookWiz text-cw-background text-3xl">
              Register
            </h1>
            <p className="font-cookWiz text-cw-background text-xl">
              Create an account for CookWizard.
            </p>
          </div>
          <div className="space-y-3">
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
              name="username"
              placeholder="username"
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
              placeholder="password"
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
            <div className="font-cookWiz">
              Have an account ?{" "}
              <Link href="/login" className="link font-cookWiz">
                <span className="font-cookWiz">Login</span>
              </Link>
            </div>
            <div className="w-fit m-auto mt-10 font-cookWiz">
              <Link href="/" className="link">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
