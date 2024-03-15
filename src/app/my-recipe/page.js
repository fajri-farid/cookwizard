import {
  GetMyRecipeOnly,
  MyRecipeComponent,
} from "@/components/myRecipe/getMyRecipeOnly";
import React from "react";

export default function page() {
  return (
    <main>
      <div>
        <h1>My Recipe</h1>
      </div>
      <div>
        <MyRecipeComponent />
      </div>
    </main>
  );
}
