import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <div className="text-center mb-12 max-w-[820px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque
        </p>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default Recipes;
