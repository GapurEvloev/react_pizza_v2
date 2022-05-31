import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/card";
import Loader from "./components/card/skeleton";

// import pizzas from "./assets/db/pizzas.json";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6293ec25089f87a57ac77f49.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => {
                  return <Loader key={index} />;
                })
              : items.map((obj) => {
                  return <PizzaBlock key={obj.id} {...obj} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
