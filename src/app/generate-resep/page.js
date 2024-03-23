import { GenerateResep } from "@/components/generateResep/generateResep";
import { Footer } from "@/components/sharedUI/Footer";
import { Newhead } from "@/components/sharedUI/Newhead";

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center min-h-screen scbreakpoint:hidden">
        <div>sorry, mobile version is under development👷</div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <Newhead />
        <GenerateResep />
        <Footer />
      </div>
    </div>
  );
}
