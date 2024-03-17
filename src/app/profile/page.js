import { MyRecipeComponent } from "@/components/myRecipe/getMyRecipeOnly";
import { GetUserData } from "@/components/profile/getUsersData";
import React from "react";

export default function page() {
  return (
    <main className="mt-2">
      <div>
        <h1 className="text-center font-bold text-3xl">Your Profile</h1>
      </div>
      <div>
        <GetUserData />
      </div>
      <div>
        <MyRecipeComponent />
      </div>
    </main>
  );
}
