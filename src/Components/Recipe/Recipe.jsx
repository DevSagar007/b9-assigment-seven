

const Recipe = ({ recipe }) => {
  const { image, recipe_name, description } = recipe;
  return (
    <>
      <div className="card">
        <div className="card-body border border-[#D4D4D4] p-6 rounded-2xl">
          <img className="w-full rounded-2xl" src={recipe.image} alt="" />
          <h3 className="text-2xl font-bold mt-2">{recipe.recipe_name}</h3>
          <p className="text-lg text-[#878787] mt-2">{recipe.description}</p>
        </div>
      </div>
    </>
  );
};

export default Recipe;