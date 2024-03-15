"use client";
import React, { useState, useEffect } from "react";

export const GetUserData = () => {
  const [userData, setUserData] = useState(null); // Mengubah initial state menjadi null

  useEffect(() => {
    async function fetchData() {
      try {
        // Mengambil user dari local storage
        const user = JSON.parse(localStorage.getItem("user"));
        const id = user.id;
        console.log(id);

        // Membuat permintaan dengan id yang diperoleh dari local storage
        const response = await fetch(`/api/v1/user?id=${id}`);
        const data = await response.json();

        // Mengatur data pengguna ke state userData
        setUserData(data.data); // Tidak perlu membuat array baru di sini
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {/* Memeriksa apakah userData bukan null */}
      {userData ? (
        <div className="pt-10">
          <h2 className="font-bold text-xl">{userData.id}</h2>
        </div>
      ) : (
        <div className="pt-10">
          <h2 className="font-bold text-xl">No user data available</h2>
        </div>
      )}
    </div>
  );
};
