"use client";
import { RequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React, { useState } from "react";

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
      body: JSON.stringify({ bahan }),
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
    setLoading(true);
    await sendResepToDatabase(resep);
  }

  async function sendResepToDatabase(resep) {
    try {
      const res = await fetch("api/v1/post", {
        method: "POST",
        body: JSON.stringify(resep),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("Resep berhasil disimpan ke database");
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
    <main className="max-w-3xl m-auto py-12 space-y-4">
      <h1 className="font-bold text-3xl text-center">
        Generete Resep Apapun Disini!
      </h1>
      <p>Masukkan bahan makanan disini</p>
      <form action={handleGenerateResep}>
        <input
          name="bahan"
          placeholder="seperti: ayam, telur, tomat"
          className="block w-full input input-bordered"
        />
        <button
          type="submit"
          disabled={buttonDisabled}
          className="mt-2 btn-md block w-full btn btn-primary"
        >
          Buat Resep
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {showResepDetails && resep && (
        <div>
          <h1 className="font-bold text-2xl">{resep.dishTitle}</h1>
          <p>{resep.desc}</p>
          <div>
            <h3 className="font-bold text-xl">Bahan:</h3>
            {resep.ingredients.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div>
            <h3 className="font-bold text-xl">Tahapan:</h3>
            {resep.recipe.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <button
            onClick={handleReset}
            className="mt-2 btn-md block w-full btn btn-primary"
          >
            Buat Lagi
          </button>
          <button
            onClick={handleSave}
            className="mt-2 btn-md block w-full btn btn-primary"
          >
            Simpan Resep
          </button>
        </div>
      )}
    </main>
  );
};
