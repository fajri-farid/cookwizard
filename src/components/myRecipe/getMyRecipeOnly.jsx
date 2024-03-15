"use client";
// src/components/getMyRecipeOnly.js
import React, { useState, useEffect } from "react";

export const MyRecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Mengambil author_id dari local storage
        const user = JSON.parse(localStorage.getItem("user"));
        const author_id = user.id;
        console.log(author_id);

        // Membuat permintaan dengan author_id yang diperoleh dari local storage
        const response = await fetch(`/api/v1/post?author_id=${author_id}`);
        const data = await response.json();
        setRecipes(data.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div className="pt-10">
              <h2 className="font-bold text-xl">{recipe.dishTitle}</h2>
              <p>{recipe.desc}</p>
              <p className="mt-2">Bahan:</p>
              {recipe.ingredients.split("\n").map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
              <p className="mt-2">Tahapan:</p>
              {recipe.recipe.split("\n").map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
