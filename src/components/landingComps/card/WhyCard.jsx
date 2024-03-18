import React from "react";

//Style
import cardStyle from "@/styles/compStyles/landing.module.css";

export const WhyCard = () => {
  return (
    <div className="flex justify-center space-x-20">
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] -space-y-10">
          <div className="font-cookWiz text-cw-background text-[75px] -space-y-16">
            <div className="w-fit m-auto">Mencari Ide</div>
            <div className="w-fit m-auto">dengan mudah</div>
          </div>
          <div className="font-cookWiz text-cw-primary text-[47px] -space-y-8 w-fit m-auto">
            <div>Gak perlu lagi mikir keras!</div>
            <div className="w-fit m-auto">Cukup ketik bahan yang</div>
            <div className="w-fit m-auto">ada, dan CookWizard</div>
            <div className="w-fit m-auto">bakal kasih kamu ide</div>
            <div className="w-fit m-auto">masakan yang cocok</div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] -space-y-10">
          <div className="font-cookWiz text-cw-background text-[75px] -space-y-16">
            <div className="w-fit m-auto">Resep Keren</div>
            <div className="w-fit m-auto">dari AI</div>
          </div>
          <div className="font-cookWiz text-cw-primary text-[47px] -space-y-8 w-fit m-auto">
            <div className="w-fit m-auto">Pengen coba resep-</div>
            <div className="w-fit m-auto">resep unik? CookWizard</div>
            <div className="w-fit m-auto">punya koleksi resep</div>
            <div className="w-fit m-auto">keren yang dibuat</div>
            <div className="w-fit m-auto">langsung oleh</div>
            <div className="w-fit m-auto">kecerdasan buatan.</div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] -space-y-10">
          <div className="font-cookWiz text-cw-background text-[75px] -space-y-16">
            <div className="w-fit m-auto">Simpan ide</div>
            <div className="w-fit m-auto">masakan</div>
          </div>
          <div className="font-cookWiz text-cw-primary text-[47px] -space-y-8 w-fit m-auto">
            <div className="w-fit m-auto">Kamu bisa simpan semua</div>
            <div className="w-fit m-auto">ide masakan yang udah</div>
            <div className="w-fit m-auto">kamu buat, jadi tidak</div>
            <div className="w-fit m-auto">perlu repot-repot</div>
            <div className="w-fit m-auto">ngubek-ngubek lemari</div>
            <div className="w-fit m-auto">dapur lagi.</div>
          </div>
        </div>
      </div>
      <div id="card" className={cardStyle.cardLayout}>
        <div className="m-auto w-[200px] -space-y-10">
          <div className="font-cookWiz text-cw-background text-[75px] -space-y-16">
            <div className="w-fit m-auto">Resep Lezat</div>
            <div className="w-fit m-auto">dari AI</div>
          </div>
          <div className="font-cookWiz text-cw-primary text-[47px] -space-y-8 w-fit m-auto">
            <div className="w-fit m-auto">Dari resep praktis</div>
            <div className="w-fit m-auto">sampai hidangan spesial,</div>
            <div className="w-fit m-auto">CookWizard bakal jadi</div>
            <div className="w-fit m-auto">sumber inspirasi utama</div>
            <div className="w-fit m-auto">buat makananmu!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
