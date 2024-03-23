import { GenerateResep } from "@/components/generateResep/generateResep";
import { Footer } from "@/components/sharedUI/Footer";
import { Newhead } from "@/components/sharedUI/Newhead";

export default function page() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Newhead />
      <GenerateResep />
      <Footer />
    </div>
  );
}
