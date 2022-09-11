import React from "react";

const Categories = ({ activeCategory, setActiveCategory }) => {
  const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  const handleActiveCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
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
