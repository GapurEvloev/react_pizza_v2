import React from 'react';


const Categories = ({categoryId, setCategoryId}) => {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => {
            return <li key={item} onClick={() => setCategoryId(index)} className={categoryId === index ? "active" : ""}>{item}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Categories;