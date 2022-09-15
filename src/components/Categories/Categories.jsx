import React from "react";
import classNames from "classnames";

const Categories = ({ activeCategory, setActiveCategory, isLoading }) => {
  const categoryNames = ["All", "Meat", "Vegan", "Chicken", "Spicy", "Cheese"];

  const handleActiveCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div
      className={classNames(
        "categories",
        isLoading === "loading" && "disabled"
      )}
    >
      <ul>
        {categoryNames.map((name, i) => {
          return (
            <li
              key={i}
              onClick={() => handleActiveCategory(i)}
              className={activeCategory === i ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
