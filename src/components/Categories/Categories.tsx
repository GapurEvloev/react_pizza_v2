import React from "react";
import classNames from "classnames";

type CategoriesProps = {
  activeCategory: number;
  setActiveCategory: (i: number) => void;
  isLoading: string;
};
const categoryNames = ["All", "Meat", "Vegan", "Chicken", "Spicy", "Cheese"];

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
  isLoading,
}) => {
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
              onClick={() => setActiveCategory(i)}
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
