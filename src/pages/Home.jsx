import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import LoadingBlock from "../components/LoadingBlock";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  const [activeCategoryId, setActiveCategoryId] = React.useState(null);
  const [activeSort, setActiveSort] = React.useState({
    name: "rating",
    type: "rating",
    order: true,
  });
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(activeSort);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6293ec25089f87a57ac77f49.mockapi.io/items/?${
          activeCategoryId > 0 ? `&category=${activeCategoryId}` : ""
        }&sortBy=${activeSort.type}&order=${activeSort.order ? "asc" : "desc"}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo(0, 0);
  }, [activeCategoryId, activeSort]);
  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategoryId}
          setActiveCategory={setActiveCategoryId}
        />
        <SortPopup activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <LoadingBlock key={i} />)
          : items.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
      </div>
    </>
  );
};

export default Home;
