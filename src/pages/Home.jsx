import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import LoadingBlock from "../components/LoadingBlock";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

import { useSelector, useDispatch } from "react-redux";
import {
  setActiveCategoryId,
  setCurrentPage,
} from "../redux/slices/filtreSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { activeCategoryId, activeSort, currentPage } = useSelector(
    (state) => state.filter
  );

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { searchValue } = React.useContext(SearchContext);

  const handleActiveCategoryId = (id) => {
    dispatch(setActiveCategoryId(id));
  };

  const handleCurrentPage = (id) => {
    dispatch(setCurrentPage(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category =
        activeCategoryId > 0 ? `&category=${activeCategoryId}` : "",
      sort = `&sortBy=${activeSort.type}`,
      order = `&order=${activeSort.order ? "asc" : "desc"}`,
      search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://6293ec25089f87a57ac77f49.mockapi.io/items/?page=${currentPage}&limit=4&${category}${sort}${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo(0, 0);
  }, [activeCategoryId, activeSort, searchValue, currentPage]);

  const pizzas = items
    // .filter((item) =>
    //   item.title.toLowerCase().includes(searchValue.toLowerCase())
    // )
    .map((pizza) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });
  const skeleton = [...new Array(6)].map((_, i) => <LoadingBlock key={i} />);

  return (
    <>
      <div className="content__top">
        <Categories
          isLoading={isLoading}
          activeCategory={activeCategoryId}
          setActiveCategory={handleActiveCategoryId}
        />
        <SortPopup isLoading={isLoading} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination
        isLoading={isLoading}
        currentPage={currentPage}
        setCurrentPage={handleCurrentPage}
      />
    </>
  );
};

export default Home;
