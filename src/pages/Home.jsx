import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/Card";
import Loader from "../components/Card/skeleton";

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: "rating", sortProperty: "rating" });
  const [sortOrder, setSortOrder] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortOrder ? `asc` : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://6293ec25089f87a57ac77f49.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortOrder, searchValue]);

  const loader = [...new Array(6)].map((_, index) => {
    return <Loader key={index} />;
  });
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    })
    .map((obj) => {
      return <PizzaBlock key={obj.id} {...obj} />;
    });

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={(id) => setCategoryId(id)} />
        <Sort
          sortType={sortType}
          setSortType={setSortType}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? loader : pizzas}</div>
    </>
  );
};

export default Home;
