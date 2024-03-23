import {
  GetMyRecipeOnly,
  MyRecipeComponent,
} from "@/components/myRecipe/getMyRecipeOnly";
import React from "react";

export default function page() {
  return (
    <main className="space-x-2 p-5">
      <div>
        <h1 className="font-bold text-3xl text-center">My Recipe</h1>
      </div>
      <div>
        <MyRecipeComponent />
      </div>
    </main>
  );
}
