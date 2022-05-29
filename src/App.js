import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/card";

import pizzas from "./assets/db/pizzas.json";

import "./scss/app.scss";


function App() {
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
            {
              pizzas.map(obj => {
                return (
                  <PizzaBlock key={obj.id} {...obj} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
