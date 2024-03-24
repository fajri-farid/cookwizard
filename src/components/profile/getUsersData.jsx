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

  useEffect(() => {
    if (userData) {
      // Ketika userData berubah, pastikan formData diatur kembali ke userData
      setFormData(userData);
    }
  }, [userData]);

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

  function handleInputChange(event) {
    const { name, value } = event.target;
    // Atur formData yang baru dengan nilai yang diubah
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
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
          {editing ? (
            <div>
              <form className="flex flex-col items-start w-full">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={profileStyle.inputStyle}
                />
                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
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
                    value={formData.username || ""}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className={profileStyle.inputStyle}
                  />
                </div>
                <div className="flex flex-col w-full my-2 space-y-3">
                  <label className="text-sm">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi || ""}
                    onChange={handleInputChange}
                    placeholder="Deskripsi"
                    className={profileStyle.inputStyleDeskripsi}
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
              onClick={() => {
                setFormData(userData); // Atur formData ke userData saat tombol "Edit" diklik
                setEditing(true);
              }}
              className="font-poppins text-[1.2rem] my-2 mt-4"
            >
              Edit Profil
            </button>
          )}
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
