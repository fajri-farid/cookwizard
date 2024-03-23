import { SwipeCarousel } from "@/components/landingComps/carousel/SwipeCarousel";
import { Newhead } from "@/components/sharedUI/Newhead";
import Link from "next/link";
//Styles
import landingStyle from "@/styles/compStyles/landing.module.css";
import { WhyCard } from "@/components/landingComps/card/WhyCard";
import StackedCardTestimonials from "@/components/landingComps/testimonials/StackedCardTestimonials";
import { Footer } from "@/components/sharedUI/Footer";

export default function Home() {
  return (
    <main>
      <div className=" flex justify-center  items-center min-h-screen scbreakpoint:hidden">
        <div>sorry, this version is under development👷</div>
      </div>
      <div className="hidden scbreakpoint:block">
        <Newhead />
        <div id="SECTION 1" className="mt-10">
          <div className="flex w-[1300px] m-auto justify-between">
            <div className="w-[750px]">
              <div className="font-poppins font-semibold text-[60px] text-cw-primary mb-10 mt-20">
                <div>Your Personal</div>
                <div>Cooking Master</div>
              </div>
              <div className={landingStyle.textStyle2}>
                <div className="mt-10">
                  <div>Kamu lapar? Ingin masak namun bingung</div>
                  <div>mau memasak apa dari bahan seadanya?</div>
                  <div>kamu ingin masak tapi...</div>
                </div>
                <div className="ml-10 mt-10 mb-10">
                  <div className="mb-3">1.Keterbatasan Bahan</div>
                  <div className="mb-3">
                    2.Kekhawatiran tentang Varian Hidangan
                  </div>
                  <div className="mb-3">3.Kesulitan Memilih Menu Makanan</div>
                  <div className="mb-3">4.Kehabisan Ide untuk Masak Apa</div>
                </div>
              </div>
              <Link href="/generate-resep">
                <button className={landingStyle.buttonStyle}>
                  Create Recipe
                </button>
              </Link>
            </div>
            <div className="mt-10">
              <SwipeCarousel />
            </div>
          </div>
        </div>
        <div
          id="SEPARATOR"
          className="m-auto w-[1300px] h-2 bg-cw-primary my-20"
        ></div>
        <div id="SECTION 2">
          <div className="m-auto  w-[1300px]">
            <div className={landingStyle.textStyleCenter}>
              <div className="font-poppins text-[50px] text-center mb-10 font-bold">
                Tanyakan Resep di CookWizard!
              </div>
            </div>
            <div className={landingStyle.textStyle}>
              <div className="font-poppins text-[20px] text-center">
                Kamu bingung mau masak apa? Gak masalah! CookWizard ada di sini
                untuk bantu. Cukup ketik bahan yang kamu punya, dan CookWizard
                bakal bantuin kamu bikin resep masakan dengan mudah.
              </div>
            </div>
            <img
              src="/auth/img_register.png"
              className="w-[720px] h-[500px] object-cover m-auto rounded-xl mt-10"
            ></img>
            <div className="-space-y-5 mt-10 w-[1300px]">
              <div className={landingStyle.textStyleCenter}>
                Apa yang bisa kamu lakukan di sini?
              </div>
              <div className="ml-10">
                <div className={landingStyle.textStyleList}>
                  <div className="list-disc mb-20 mt-12">
                    <li>
                      Cari ide masakan dengan bahan yang ada di lemari dapurmu
                    </li>
                    <li>Simpan ide masakan yang udah kamu ciptain</li>
                  </div>
                  <div className="list-disc mb-20 mt-12">
                    <li>Lihat resep-resep keren yang dibikin sama AI</li>
                    <li>Dapetin inspirasi baru buat makananmu</li>
                  </div>
                </div>
              </div>
              <div className={landingStyle.textStyleCenter}>
                Jadi, gak perlu pusing lagi mikirin masakan!
                <p /> CookWizard siap bantu kamu.
              </div>
            </div>
          </div>
        </div>
        <div
          id="SEPARATOR"
          className="m-auto w-[1300px] h-2 bg-cw-primary my-10"
        ></div>
        <div id="SECTION 3">
          <div className="font-poppins text-[50px] text-cw-primary text-center">
            Why CookWizard
          </div>
          <div>
            <WhyCard />
          </div>
        </div>
        <div
          id="SEPARATOR"
          className="m-auto w-[1400px] h-2 bg-cw-primary my-20"
        ></div>
        <div id="SECTION 4">
          <div className=" w-[1300px] m-auto">
            <StackedCardTestimonials />
          </div>
        </div>
        <div
          id="SEPARATOR"
          className="m-auto  w-[1300px] h-2 bg-cw-primary my-20"
        ></div>
        <div id="SECTION 5" className="mb-[100px]">
          <div className=" w-[1300px] m-auto">
            <div className="font-poppins text-[52px] text-cw-primary text-center mb-12">
              Pertanyaan Umum
            </div>
            <div>
              <div className={landingStyle.textQuestion2}>
                1. Kenapa Pakai AI?
              </div>
              <div className={landingStyle.textAnswer2}>
                Karena AI, CookWizard bisa memberikan ide masakan yang cocok
                dengan bahan yang kamu punya. Gak perlu repot, tinggal ketik
                bahan, dan voila! Kamu punya resep masakan baru!
              </div>
              <div className={landingStyle.textQuestion2}>
                2. Berapa Biayanya?
              </div>
              <div className={landingStyle.textAnswer2}>
                Kabar baiknya, CookWizard bisa kamu nikmati tanpa biaya sepeser
                pun! Yup, semua fitur dan kebaikan CookWizard gratis buat kamu
                gunakan.
              </div>
              <div className={landingStyle.textQuestion2}>
                3. Bagaimana CookWizard Membantu Saya?
              </div>
              <div className={landingStyle.textAnswer2}>
                CookWizard bakal jadi sahabat terbaikmu di dapur! Kamu bisa cari
                ide masakan, simpen resep, dan lihat resep keren yang udah
                dibikin sama AI. Semua jadi lebih mudah dengan CookWizard!
              </div>
              <div className={landingStyle.textQuestion2}>
                4. Terus Apa Bedanya dengan Saya Chat di ChatGPT atau AI
                Lainnya?
              </div>
              <div className={landingStyle.textAnswer2}>
                Bedanya, di CookWizard kamu bisa lebih dari sekadar minta saran
                tentang bahan-bahan yang kamu punya. Kamu bisa simpan resep
                favoritmu, lihat resep dari pengguna lain, dan dapatkan
                inspirasi baru setiap hari! Jadi, selain buat masak jadi lebih
                seru, kamu juga bisa dapetin resep keren dari komunitas kami!
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
