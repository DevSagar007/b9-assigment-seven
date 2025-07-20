import React from "react";

const Cookings = ({ cook, recipe_name, preparing_time, calories }) => {
  const totalCalories = cook.reduce(
    (total, recipe) => total + parseInt(recipe.calories),
    0
  );

  console.log(totalCalories);

  const totalTime = cook.reduce(
    (total, recipe) => total + parseInt(recipe.preparing_time),
    0
  );

  console.log(totalTime);

  return (
    <div>
      <div className="p-8 border rounded-xl border-gray-300">
        <h3 className="text-2xl text-center pb-3 border-b border-gray-200 font-bold mb-4">
          Want to cook: {cook.length}
        </h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-700">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Recipe Name</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cook.map((recipe, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{recipe.recipe_name}</td>
                <td className="py-2 px-4">{recipe.time} min</td>
                <td className="py-2 px-4">{recipe.calories} cal</td>
              </tr>
            ))}
            <tr className="font-bold border-t bg-gray-100">
              <td className="py-2 px-4" colSpan="2">
                Total
              </td>
              <td className="py-2 px-4">{totalTime} min</td>
              <td className="py-2 px-4">{totalCalories} cal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cookings;
