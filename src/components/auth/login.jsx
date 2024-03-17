"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toast";
import { useState } from "react";
import { siteUrl } from "@/config/siteUrl";

//Style
import loginStyle from "@/styles/compStyles/auth.module.css";

export const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  async function handleLogin() {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("All field must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    // const data = await res.json();

    if (res.status === 401 || res.status === 404) {
      const { errorMessage } = await res.json();
      toast.error(errorMessage);
      return;
    }

    const { data, message } = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    // toast.success(message);
    // router.push("/");
    // window.location.replace(siteUrl);
    console.log(data);
  }

  return (
    <main>
      <div className="w-fit flex space-x-32">
        <div>
          <img src="/auth/img_login.png" alt="" className="w-[950px] " />
        </div>
        <div className="w-[970px] flex align-middle">
          <div className="w-fit m-auto space-y-5">
            <div>
              <h1 className="font-cookWiz text-cw-background text-8xl">
                Login
              </h1>
            </div>
            <div className="space-y-10">
              <div>
                <div className="font-cookWiz text-cw-background text-6xl -mt-5">
                  Email Address
                </div>
                <input
                  name="email"
                  placeholder="email@domain.com"
                  onChange={handleChangeInput}
                  className={loginStyle.loginInputStyle}
                />
              </div>
              <div>
                <div className="font-cookWiz text-cw-background text-6xl -mt-5">
                  Password
                </div>
                <input
                  name="password"
                  placeholder="password"
                  type="password"
                  onChange={handleChangeInput}
                  className={loginStyle.loginInputStyle}
                />
              </div>
              <div className="w-fit m-auto">
                <button
                  onClick={handleLogin}
                  className={loginStyle.buttonStyle}
                >
                  Login
                </button>
              </div>
            </div>
            <div>
              <div className="font-cookWiz text-5xl">
                Don&apos;t have an account ?{" "}
                <Link href="/register" className="link">
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
