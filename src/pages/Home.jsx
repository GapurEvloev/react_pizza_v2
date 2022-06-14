import React from "react";

import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import PizzaBlock from "../components/Card";
import Loader from "../components/Card/skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const {items, status} = useSelector((state) => state.pizzas);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const sortOrder = sort.sortOrder ? `asc` : "desc";

  const handleCategoryClick = (id) => {
    dispatch(setCategoryId(id));
  };

  const { searchValue } = React.useContext(SearchContext);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {


    const order = sortOrder;
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchPizzas({
      order,
      category,
      search,
      currentPage,
      sortType
    }));
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
        sortOrder,
      });
      navigate(`/?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType, sortOrder, navigate, currentPage]);

  // Если был первый рендер, то проверяем url-параметры и сохраняем в редаксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
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
      {
        status === 'error' ? (
          <div className="content__error-info">
            <h2>Unexpected error 😕</h2>
            <a href="/" className="button button--black">
              <span>Back</span>
            </a>
          </div>
        ) : (
          <>
            <div className="content__top">
              <Categories categoryId={categoryId} setCategoryId={handleCategoryClick} />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">{status === 'loading' ? loader : pizzas}</div>
            <Pagination currentPage={currentPage} setCurrentPage={onChangePage} />
          </>
        )
      }
    </>
  );
};

export default Home;
