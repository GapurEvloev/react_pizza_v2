import Header from "./components/Header";
import Categories from "./components/Categories";
import SortPopup from "./components/SortPopup";
import PizzaBlock from "./components/PizzaBlock";

import pizzasData from "./assets/data/pizzas.json";

import "./scss/app.scss";

function App() {
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
              {pizzasData.map((pizza) => {
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
