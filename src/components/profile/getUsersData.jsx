"use client";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import profileStyle from "@/styles/compStyles/profile.module.css";

export const GetUserData = () => {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = user.id;
      const response = await fetch(`/api/v1/user?id=${id}`);
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  // fungsi edit
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
      setEditing(false);
      console.log("berhasil update!");
      toast.success("Profile Berhasil Diupdate!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }
  // Fungsi menangani perubahan input
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      {/* Memeriksa apakah userData bukan null */}
      {userData ? (
        <div className="pt-10 flex flex-col items-center px-[23vw]">
          <img
            src="/PhotoProfile.png"
            alt="Avatar"
            className="object-cover w-[150px] h-[150px]"
          />
          <p className="font-bold font-poppins text-3xl mt-3 mb-2">
            {userData.firstName} {userData.lastName}
          </p>
          <p className="font-semibold font-poppins text-2xl mt-1">
            {userData.username}
          </p>
          {/* Menampilkan tanggal gabungan jika tersedia */}
          {userData.createdAt && (
            <p className="font-poppins text-1xl">
              joined{" "}
              {new Date(userData.createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          <p className="font-poppins text-xl mt-2 text-center">
            {userData.deskripsi
              ? userData.deskripsi
              : `Welcome to cookwizard ${userData.username}!`}
          </p>
          {/* EDIT START */}
          {editing ? (
            <div>
              {/* Form untuk mengedit profil */}
              <form className="flex flex-col items-start w-full">
                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || userData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={profileStyle.inputStyle}
                  />
                </div>

                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || userData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={profileStyle.inputStyle}
                  />
                </div>

                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username || userData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className={profileStyle.inputStyle}
                  />
                </div>

                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi || userData.deskripsi}
                    onChange={handleInputChange}
                    placeholder="Deskripsi"
                    className={profileStyle.inputStyle}
                  />
                </div>
              </form>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={updateUser}
                  className={profileStyle.buttonStyle}
                >
                  Simpan
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="font-poppins text-[1.2rem] my-2 mt-4"
            >
              Edit Profil
            </button>
          )}
          {/* EDIT END */}
          <div className="border border-black my-10  min-h-1 w-full bg-black max-w-[95vh]"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-[30vh]">
          <img src="/loading/loading.gif" alt="" className="w-[300px]" />
        </div>
      )}
      <Toaster />
    </div>
  );
};
