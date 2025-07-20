import React, { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [cook, setCook] = useState([]);

  const handleAddToCook = (recipe) => {
    console.log("click to cook", recipe);
    const newRecipe = [...cook, recipe];
    setCook(newRecipe);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes cook={cook} handleAddToCook={handleAddToCook}></Recipes>
    </>
  );
}

export default App;
