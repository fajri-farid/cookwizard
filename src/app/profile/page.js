import { MyRecipeComponent } from "@/components/myRecipe/getMyRecipeOnly";
import { GetUserData } from "@/components/profile/getUsersData";
import { Footer } from "@/components/sharedUI/Footer";
import { Newhead } from "@/components/sharedUI/Newhead";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="flex justify-center items-center min-h-screen scbreakpoint:hidden">
          <div>sorry, mobile version is under development👷</div>
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <Newhead />
          <div>
            <GetUserData />
          </div>
          <div>
            <MyRecipeComponent />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
