"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import recipeStyle from "@/styles/compStyles/profile.module.css";

export const MyRecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const author_id = user.id;

        const response = await fetch(`/api/v1/post?author_id=${author_id}`);
        const data = await response.json();
        setRecipes(
          data.data.map((recipe) => ({ ...recipe, showDetails: false }))
        );
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchData();
  }, []);

  const toggleShowDetails = (index) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes];
      updatedRecipes[index] = {
        ...updatedRecipes[index],
        showDetails: !updatedRecipes[index].showDetails,
      };
      return updatedRecipes;
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/v1/post/${id}`, {
        method: "DELETE",
      });
      toast.success("Resep Berhasil Dihapus!");
      // Setelah berhasil menghapus, perbarui daftar resep dengan menghilangkan resep yang dihapus
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div className="my-10">
      <ul className="space-y-10">
        {recipes.map((recipe, index) => (
          <li
            key={recipe.id}
            className=" bg-cw-secondary w-[872px] m-auto p-5 rounded-xl"
          >
            <div>
              <h2 className="font-poppins font-semibold text-[30px]">
                {recipe.dishTitle}
              </h2>
              <p className="font-popiins text-[20px] mt-3">{recipe.desc}</p>
              <p className="mt-5 font-poppins text-[24px] leading-4">Bahan:</p>
              {recipe.ingredients.split(", ").map((ingredient, index) => (
                <p className="font-poppins text-[20px] mt-2" key={index}>
                  {ingredient}
                </p>
              ))}
              {recipe.showDetails && (
                <div>
                  <p className="mt-10 font-poppins text-[24px] leading-4 mb-4">
                    Tahapan:
                  </p>
                  {recipe.recipe.split("\n").map((step, index) => (
                    <p className="font-poppins text-[20px] mb-2" key={index}>
                      {step}
                    </p>
                  ))}
                </div>
              )}
              <div className="w-fit flex space-x-10 mt-5 ml-5">
                <button
                  className={recipeStyle.buttonOnDetails}
                  onClick={() => toggleShowDetails(index)}
                >
                  {recipe.showDetails
                    ? "Sembunyikan Detail"
                    : "Tampilkan Semua"}
                </button>
                {recipe.showDetails && (
                  <button
                    className={recipeStyle.buttonDelete}
                    onClick={() => handleDelete(recipe.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
};
