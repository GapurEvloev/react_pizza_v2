import React from "react";
import classNames from "classnames";

type CategoriesProps = {
  activeCategory: number;
  setActiveCategory: any;
  isLoading: string;
};

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
  isLoading,
}) => {
  const categoryNames = ["All", "Meat", "Vegan", "Chicken", "Spicy", "Cheese"];

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
