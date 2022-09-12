import React from "react";
import classNames from "classnames";

const Categories = ({ activeCategory, setActiveCategory, isLoading }) => {
  const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  const handleActiveCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className={classNames("categories", isLoading && "disabled")}>
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => handleActiveCategory(null)}
        >
          All
        </li>
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
