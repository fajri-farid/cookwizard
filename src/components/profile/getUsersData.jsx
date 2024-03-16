"use client";
import React, { useState, useEffect } from "react";

export const GetUserData = () => {
  const [userData, setUserData] = useState(null); // Mengubah initial state menjadi null
  const [editing, setEditing] = useState(false); // State untuk menentukan apakah pengguna sedang dalam mode pengeditan
  const [formData, setFormData] = useState({}); // State untuk menyimpan data yang akan diubah
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // Mengambil user dari local storage
      const user = JSON.parse(localStorage.getItem("user"));
      const id = user.id;

      // Membuat permintaan dengan id yang diperoleh dari local storage
      const response = await fetch(`/api/v1/user?id=${id}`);
      const data = await response.json();

      // Mengatur data pengguna ke state userData
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  // Fungsi untuk mengirimkan permintaan PATCH ke server
  async function updateUser() {
    try {
      const response = await fetch(`/api/v1/user/${userData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const updatedData = await response.json();
      setUserData(updatedData.data);
      setEditing(false); // Keluar dari mode pengeditan setelah berhasil mengirimkan permintaan PATCH
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }

  // Fungsi untuk menangani perubahan input
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

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
          {/* EDIT START */}
          {/* Tombol untuk masuk atau keluar dari mode pengeditan */}
          {editing ? (
            <div>
              {/* Form untuk mengedit profil */}
              <form className="flex flex-col items-start w-full">
                <div className="flex flex-col w-full my-2">
                  <label className="text-sm">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || userData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                  />
                </div>

                <div className="flex flex-col w-full my-2">
                  <label className="text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || userData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                  />
                </div>

                <div className="flex flex-col w-full my-2">
                  <label className="text-sm">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username || userData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                  />
                </div>

                <div className="flex flex-col w-full my-2">
                  <label className="text-sm">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi || userData.deskripsi}
                    onChange={handleInputChange}
                    placeholder="Deskripsi"
                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                  />
                </div>
              </form>
              <div className="flex justify-center items-center">
                <button
                  onClick={updateUser}
                  className="flex flex-col justify-center bg-black text-white rounded-xl p-2"
                >
                  Simpan
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setEditing(true)} className="my-2">
              Edit Profil
            </button>
          )}
          {/* EDIT END */}
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
