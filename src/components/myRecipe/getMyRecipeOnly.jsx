"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={recipe.id} className="ml-[100px]">
            <div className="pt-10">
              <h2 className="font-bold text-xl">{recipe.dishTitle}</h2>
              <p>{recipe.desc}</p>
              <p className="mt-2">Bahan:</p>
              {recipe.ingredients.split(", ").map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
              {recipe.showDetails && (
                <div>
                  <p className="mt-2">Tahapan:</p>
                  {recipe.recipe.split("\n").map((step, index) => (
                    <p key={index}>{step}</p>
                  ))}
                </div>
              )}
              <div>
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => toggleShowDetails(index)}
                >
                  {recipe.showDetails
                    ? "Sembunyikan Detail"
                    : "Tampilkan Semua"}
                </button>
                {recipe.showDetails && (
                  <button
                    className="ml-10 mt-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
