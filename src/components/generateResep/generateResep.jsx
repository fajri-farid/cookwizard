"use client";
import { RequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
//style
import generateRecipeStyle from "@/styles/compStyles/generateRecipe.module.css";

export const GenerateResep = () => {
  const [resep, setResep] = useState(null);
  const [showResepDetails, setShowResepDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  async function handleGenerateResep(formData) {
    const bahan = formData.get("bahan");
    const user = JSON.parse(localStorage.getItem("user"));
    const author_id = user.id;
    formData.append("author_id", author_id);
    console.log(author_id); // ad author_id di console browser
    const res = await fetch("api/v1/ai", {
      method: "POST",
      body: JSON.stringify({ bahan, author_id }),
    });
    const { data } = await res.json();
    const GeneratedOutput = JSON.parse(data.choices[0].message.content);
    console.log(GeneratedOutput);
    setResep(GeneratedOutput);
    setShowResepDetails(true);
    setLoading(false);
  }
  function handleReset() {
    setResep(null);
    setShowResepDetails(false);
    setButtonDisabled(false);
  }
  async function handleSave() {
    // Pastikan resep tidak kosong
    if (!resep) {
      console.error("Tidak ada resep yang tersedia untuk disimpan");
      return;
    }
    // Ambil id pengguna dari localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const author_id = user.id;
    // Tambahkan author_id ke objek resep
    const resepWithAuthorId = { ...resep, author_id };
    // Atur loading menjadi true
    setLoading(true);
    // Kirim resep ke database
    await sendResepToDatabase(resepWithAuthorId);
  }
  async function sendResepToDatabase(resep) {
    try {
      // Kirim permintaan POST ke backend dengan body berisi resep
      const res = await fetch("api/v1/post", {
        method: "POST",
        body: JSON.stringify(resep), // Sertakan resep dengan author_id
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Periksa status respons
      if (res.ok) {
        console.log("Resep berhasil disimpan ke database");
        toast.success("Resep Berhasil Disimpan!");
      } else {
        console.error("Gagal menyimpan resep ke database");
      }
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat mengirim data resep ke database:",
        error
      );
    }
    console.log(resep);
  }

  return (
    <main className="max-w-3xl m-auto py-10 space-y-4">
      <h1 className="font-semibold font-poppins text-[3rem] text-cw-background text-center mb-10">
        Generate Resep Apapun <br />
        Disini!
      </h1>
      <p className="font-poppins text-[1.5rem]">
        Masukkan bahan makananmu disini
      </p>
      <form action={handleGenerateResep} className="space-y-10 h-auto">
        <input
          name="bahan"
          placeholder="seperti: ayam, telur, tomat"
          className={generateRecipeStyle.inputStyle}
        />
        <div className="w-fit m-auto">
          <button
            type="submit"
            disabled={buttonDisabled}
            className={generateRecipeStyle.buttonStyle}
          >
            Buat Resep
          </button>
        </div>
      </form>

      {showResepDetails && resep && (
        <div>
          <h1 className="font-bold font-poppins text-[2.2rem] text-cw-background mb-4 mt-10">
            {resep.dishTitle}
          </h1>
          <p className="font-poppins text-[1.2rem] leading-8 text-justify">
            {resep.desc}
          </p>
          <div>
            <h3 className="font-poppins text-[1.8rem] font-bold mt-5">
              Bahan:
            </h3>
            {resep.ingredients.map((item, index) => (
              <div key={index} className="font-poppins text-[1.2rem] leading-8">
                {item}
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-poppins text-[1.8rem] font-bold mt-5">
              Tahapan:
            </h3>
            {resep.recipe.map((item, index) => (
              <div
                key={index}
                className="font-poppins text-[1.2rem] leading-10 text-justify"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="w-fit m-auto space-x-10 my-20 flex">
            <button
              onClick={handleReset}
              className={generateRecipeStyle.buttonDetails}
            >
              Buat Lagi
            </button>
            <button
              onClick={handleSave}
              className={generateRecipeStyle.buttonDetails}
            >
              Simpan Resep
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </main>
  );
};
