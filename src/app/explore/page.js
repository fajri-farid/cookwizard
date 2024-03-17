import { ShowAllRecipe } from "@/components/explore/showAllRecipe";
import React from "react";

export default function page() {
  return (
    <div className="space-y-2 p-5">
      <div>
        <h1 className="font-bold text-2xl text-center"> Welcome to explore!</h1>
      </div>
      <div>
        <ShowAllRecipe />
      </div>
    </div>
  );
}
