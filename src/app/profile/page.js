import { GetUserData } from "@/components/profile/getUsersData";
import React from "react";

export default function page() {
  return (
    <main>
      <div>
        <h1>Your Profile</h1>
      </div>
      <div>
        <GetUserData />
      </div>
    </main>
  );
}
