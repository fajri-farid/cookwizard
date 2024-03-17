import { Login } from "@/components/auth/login";
import { Footer } from "@/components/sharedUI/Footer";
import { Newhead } from "@/components/sharedUI/Newhead";

export default function page() {
  return (
    <div>
      <div className=" flex justify-center  items-center min-h-screen scbreakpoint:hidden">
        <div>sorry, mobile version is under development👷</div>
      </div>
      <div className="hidden scbreakpoint:block">
        <Newhead />
        <Login />
        <Footer />
      </div>
    </div>
  );
}
