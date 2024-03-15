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
      <h2>My Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.dishTitle}</h3>
            <p>{recipe.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
