

const Recipe = ({ recipe, handleAddToCook }) => {
  const { image, recipe_name, description, ingredients, calories } = recipe;
  return (
    <>
      <div className="card">
        <div className="card-body border border-[#D4D4D4] p-6 rounded-2xl">
          <a href="#">
            <img className="w-full rounded-2xl" src={recipe.image} alt="" />
          </a>
          <h3 className="text-xl font-bold mt-5">
            <a href="#">{recipe.recipe_name}</a>
          </h3>
          <p className=" text-[#878787] mt-2 mb-4">{recipe.description}</p>
          <ul className="border-b border-t border-[#ddd] pt-6 pb-6">
            <h6 className="mb-2">Ingredients: 6</h6>
            {recipe.ingredients.map((ingredient, index) => (
              <li className="text-[#878787] mb-2 pl-3" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 flex-wrap mt-2">
            <div className="flex gap-1">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z"
                    stroke="#282828"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10H13.5"
                    stroke="#282828"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5V10"
                    stroke="#282828"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[#535353]">{recipe.preparing_time}</span>
            </div>
            <div className="flex gap-1">
              <span>
                <svg
                  width="14"
                  height="19"
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9C9 6.04 7 2 6 1C6 4.038 4.227 5.741 3 7C1.774 8.26 1 10.24 1 12C1 13.5913 1.63214 15.1174 2.75736 16.2426C3.88258 17.3679 5.4087 18 7 18C8.5913 18 10.1174 17.3679 11.2426 16.2426C12.3679 15.1174 13 13.5913 13 12C13 10.468 11.944 8.06 11 7C9.214 10 8.209 10 7 9Z"
                    stroke="#282828"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[#535353]">{recipe.calories}</span>
            </div>
            <button
              onClick={() => handleAddToCook(recipe,)}
              type="button"
              className="btn h-12 px-6 bg-[#0be58a] font-semibold text-[#150B2B] flex items-center justify-center rounded-4xl"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;