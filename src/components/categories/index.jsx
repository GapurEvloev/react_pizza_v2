import React from 'react';

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const setActiveCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => {
            return <li key={item} onClick={() => setActiveCategory(index)} className={activeIndex === index ? "active" : ""}>{item}</li>
          })
        }
        {/* <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
  );
};

export default Categories;