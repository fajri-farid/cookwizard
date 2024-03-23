import { MyRecipeComponent } from "@/components/myRecipe/getMyRecipeOnly";
import { GetUserData } from "@/components/profile/getUsersData";
import { Footer } from "@/components/sharedUI/Footer";
import { Newhead } from "@/components/sharedUI/Newhead";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="flex justify-center  items-center min-h-screen scbreakpoint:hidden">
        <div>sorry, mobile version is under development👷</div>
      </div>
      <div className="hidden scbreakpoint:block min-h-full">
        <Newhead />
        <div>
          <GetUserData />
        </div>
        <div>
          <MyRecipeComponent />
        </div>
        <Footer />
      </div>
    </main>
  );
}
