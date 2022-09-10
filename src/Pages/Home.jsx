import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import LoadingBlock from "../components/LoadingBlock";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://6293ec25089f87a57ac77f49.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
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
