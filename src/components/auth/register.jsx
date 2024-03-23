"use client";

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
//Styles
import registerStyle from "@/styles/compStyles/auth.module.css";
import { Footer } from "../sharedUI/Footer";
import { useRouter } from "next/navigation";

export const Register = () => {
  const router = useRouter();
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
      toast.error("Pastikan Terisi Semua.");
      console.log("All fields must be filled");
      return; // di return supaya next codenya tidak di eksekusi
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });
    toast.success("Register Berhasil!");
    const data = await res.json();
    router.push("/login");
    console.log(data);
  }

  return (
    <main>
      <div>
        <div className="w-fit flex space-x-32 space-y-[5vh]">
          <div>
            <img src="/auth/img_register.png" alt="" className="w-[1300px] " />
          </div>
          <div className="w-[1000px] flex align-middle">
            <div className="w-fit m-auto">
              <div className="mb-5">
                <div className="font-poppins text-cw-background text-[40px]">
                  Register
                </div>
                <div className="font-poppins text-cw-background text-[20px] mt-2">
                  Create an account for CookWizard.
                </div>
              </div>
              <div className="space-y-10">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="firstName"
                    placeholder="Firstname"
                    onChange={handleChangeInput}
                    className={registerStyle.inputStyle}
                  />
                  <input
                    name="lastName"
                    placeholder="Lastname"
                    onChange={handleChangeInput}
                    className={registerStyle.inputStyle}
                  />
                </div>
                <input
                  name="username"
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
                <div className="font-poppins text-[16px]">
                  Have an account ?{" "}
                  <Link href="/login" className="link font-poppins text-[16px]">
                    <span className="font-poppins">Login</span>
                  </Link>
                </div>
                <div className="w-fit m-auto mt-10 font-poppins text-[16px]">
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
      <Toaster />
    </main>
  );
};
