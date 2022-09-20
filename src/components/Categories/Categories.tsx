import React from "react";

type CategoriesProps = {
  activeCategory: number;
  setActiveCategory: (i: number) => void;
};

const categoryNames = ["All", "Meat", "Vegan", "Chicken", "Spicy", "Cheese"];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ activeCategory, setActiveCategory }) => {
    return (
      <div className="categories">
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
  }
);

export default Categories;
