import { AuthLayout } from "@/components/auth/authLayout";
import React from "react";

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}
