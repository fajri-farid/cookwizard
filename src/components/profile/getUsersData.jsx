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

  //   const joinedDate = new Date(userData.createdAt).toLocaleDateString("id-ID", {
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   });

  return (
    <div>
      {/* Memeriksa apakah userData bukan null */}
      {userData ? (
        <div className="pt-10 flex flex-col items-center">
          <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full bg-gray-300 overflow-hidden">
            {userData.avatar ? (
              <img
                src={userData.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-sm text-center">
                No avatar
              </span>
            )}
          </div>
          {/* <h2 className="font-bold text-xl">{userData.id}</h2> */}
          <p className="font-bold text-2xl">
            {userData.firstName} {userData.lastName}
          </p>
          <p className="font-semibold text-xl">{userData.username}</p>
          {/* Menampilkan tanggal gabungan jika tersedia */}
          {userData.createdAt && (
            <p className="text-sm">
              joined{" "}
              {new Date(userData.createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          <p className="text-md">
            {userData.deskripsi
              ? userData.deskripsi
              : `Welcome to cookwizard ${userData.username}!`}
          </p>
          <div className="border border-black my-10  min-h-1 w-full bg-black max-w-[95vh]"></div>
        </div>
      ) : (
        <div className="pt-10">
          <h2 className="font-bold text-xl">No user data available</h2>
        </div>
      )}
    </div>
  );
};
