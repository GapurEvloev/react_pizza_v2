import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage  } from "../redux/slices/filterSlice";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/Card";
import Loader from "../components/Card/skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const {categoryId, sort, currentPage} = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const sortOrder = sort.sortOrder;

  const handleCategoryClick = (id) => {
    dispatch(setCategoryId(id));
  };

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // const [currentPage, setCurrentPage] = React.useState(1);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortOrder ? `asc` : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://6293ec25089f87a57ac77f49.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType}&order=${order}${search}`
      )
      .then(res => {
        setItems(res.data);
        setIsLoading(false);
      })
    
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortOrder, searchValue, currentPage]);

  const loader = [...new Array(4)].map((_, index) => {
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
        <Categories categoryId={categoryId} setCategoryId={handleCategoryClick} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? loader : pizzas}</div>
      <Pagination currentPage={currentPage} setCurrentPage={onChangePage} />
    </>
  );
};

export default Home;
