import React from 'react';


const Categories = () => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => {
            return <li key={item} onClick={() => setActiveIndex(index)} className={activeIndex === index ? "active" : ""}>{item}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Categories;