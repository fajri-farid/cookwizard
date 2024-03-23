"use client";
import { siteUrl } from "@/config/siteUrl";
import Cookies from "js-cookie";
//Style
import HeaderStyle from "@/styles/compStyles/header.module.css";

export const LogoutButton = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    window.location.replace(siteUrl);
  };

  return (
    <button className={HeaderStyle.submenu} onClick={handleLogout}>
      Logout
    </button>
  );
};
