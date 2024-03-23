"use client";
import React, { useState, useEffect } from "react";

export const ShowAllRecipe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/v1/post");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error("Error fetching all posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      {data.map((post) => (
        <div key={post.id}>
          <div className="pt-10">
            <h2 className="font-bold text-xl">{post.dishTitle}</h2>
            <p>{post.desc}</p>
            <p>Bahan:</p>
            {post.ingredients.split("\n").map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
            <p>Tahapan:</p>
            {post.recipe.split("\n").map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
