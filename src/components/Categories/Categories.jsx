import React from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);
  const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

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
          Все
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
