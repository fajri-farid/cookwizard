import { Register } from "@/components/auth/register";
import React from "react";
import { Newhead } from "@/components/sharedUI/Newhead";

export default function page() {
  return (
    <div>
      <div className=" flex justify-center  items-center min-h-screen scbreakpoint:hidden">
        <div>sorry, mobile version is under development👷</div>
      </div>
      <div className="hidden scbreakpoint:block">
        <Newhead />
        <Register />
      </div>
    </div>
  );
}
