"use client";

import Link from "next/link";
import { useState } from "react";

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
      <div className="font-medium tracking-tight text-base">CookWizard.</div>
      <div className="">
        <h1 className="font-bold">Register</h1>
        <p>Create an account for CookWizard.</p>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            name="firstName"
            placeholder="First name"
            onChange={handleChangeInput}
            className="block w-full input input-bordered"
          />
          <input
            name="lastName"
            placeholder="Last name"
            onChange={handleChangeInput}
            className="block w-full input input-bordered"
          />
        </div>
        <input
          name="username"
          placeholder="username"
          onChange={handleChangeInput}
          className="block w-full input input-bordered"
        />
        <input
          name="email"
          placeholder="email@domain.com"
          onChange={handleChangeInput}
          className="block w-full input input-bordered"
        />
        <input
          name="password"
          placeholder="password"
          onChange={handleChangeInput}
          className="block w-full input input-bordered"
        />
        <button
          className="btn-md block w-full btn btn-primary"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      <div>
        <div>
          Have an account ?{" "}
          <Link href="/login" className="link">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
