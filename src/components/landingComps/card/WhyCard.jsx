import React from "react";

//Style
import cardStyle from "@/styles/compStyles/landing.module.css";

export const WhyCard = () => {
  return (
    <div className="flex justify-center space-x-20 mt-10">
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px]">
          <div className="font-poppins text-cw-background text-[24px] mb-8">
            <div className="w-fit m-auto">Mencari Ide</div>
            <div className="w-fit m-auto">dengan Mudah</div>
          </div>
          <div className="font-poppins text-cw-primary text-[18px] -space-y-8 w-fit m-auto text-center">
            <div>
              Gak perlu lagi mikir keras! Cukup ketik bahan yang ada, dan
              CookWizard bakal kasih kamu ide masakan yang cocok
            </div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] space-y-10">
          <div className="font-poppins text-cw-background text-[24px] mb-8">
            <div className="w-fit m-auto">Resep Keren</div>
            <div className="w-fit m-auto">dari AI</div>
          </div>
          <div className="font-poppins text-cw-primary text-[18px] space-y-8 w-fit m-auto text-center">
            <div>
              Pengen coba resep-resep unik? CookWizard punya koleksi resep keren
              yang dibuat langsung oleh kecerdasan buatan.
            </div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] space-y-10">
          <div className="font-poppins text-cw-background text-[24px] mb-8">
            <div className="w-fit m-auto">Simpan Ide</div>
            <div className="w-fit m-auto">Masakan</div>
          </div>
          <div className="font-poppins text-cw-primary text-[18px] space-y-8 w-fit m-auto text-center">
            <div className="w-fit m-auto">
              Kamu bisa simpan semua ide masakan yang udah kamu buat, jadi tidak
              perlu repot-repot ngubek-ngubek lemari dapur lagi.
            </div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] space-y-10">
          <div className="font-poppins text-cw-background text-[24px] mb-8">
            <div className="w-fit m-auto">Resep Lezat</div>
            <div className="w-fit m-auto">dari AI</div>
          </div>
          <div className="font-poppins text-cw-primary text-[18px] space-y-8 w-fit m-auto text-center">
            <div className="w-fit m-auto">
              Dari resep praktis sampai hidangan spesial, CookWizard bakal jadi
              sumber inspirasi utama buat makananmu!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
