import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SortPopup from "./components/SortPopup";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://6293ec25089f87a57ac77f49.mockapi.io/items")
      .then((res) => setItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((pizza) => {
                return <PizzaBlock key={pizza.id} {...pizza} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
