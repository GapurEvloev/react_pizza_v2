import React from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import LoadingBlock from "../components/LoadingBlock";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

import {
  setActiveCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { sortItems } from "../components/SortPopup/SortPopup";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/pizza/selectors";
import { useAppDispatch } from "../redux/store";
import { SearchPizzaParams } from "../redux/pizza/types";
import classNames from "classnames";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { activeCategoryId, activeSort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const handleActiveCategoryId = React.useCallback((id: number) => {
    dispatch(setActiveCategoryId(id));
  }, []);

  const handleCurrentPage = (id: number) => {
    dispatch(setCurrentPage(id));
  };

  const getPizzas = async () => {
    const category = activeCategoryId > 0 ? `${activeCategoryId}` : "",
      sort = `${activeSort.type}`,
      order = `${activeSort.order ? "asc" : "desc"}`,
      search = searchValue ? `${searchValue}` : "";

    dispatch(
      //@ts-ignore
      fetchPizzas({
        currentPage: String(currentPage),
        category,
        sort,
        order,
        search,
      })
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          type: activeSort.type,
          activeCategoryId,
          currentPage,
          order: activeSort.order ? "asc" : "desc",
        },
        { addQueryPrefix: true }
      );
      navigate(queryString);
    }

    isMounted.current = true;
  }, [
    activeSort.type,
    activeCategoryId,
    currentPage,
    navigate,
    activeSort.order,
  ]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;
      const activeSort = sortItems.find((obj) => obj.type === params.sort);

      dispatch(
        setFilters({
          activeCategoryId: Number(params.category),
          ...params,
          searchValue: params.search,
          currentPage: Number(params.currentPage),
          activeSort: activeSort || sortItems[0],
        })
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
  }, [activeCategoryId, activeSort, searchValue, currentPage]);

  const pizzas = items
    // .filter((item) =>
    //   item.title.toLowerCase().includes(searchValue.toLowerCase())
    // )
    .map((pizza: any) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });
  const skeleton = [...new Array(6)].map((_, i) => <LoadingBlock key={i} />);

  return (
    <>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Unexpected error 😕</h2>
          <a href="/" className="button button--black">
            <span>Back</span>
          </a>
        </div>
      ) : (
        <>
          <div
            className={classNames(
              "content__top",
              status === "loading" && "content__top--loading"
            )}
          >
            <Categories
              activeCategory={activeCategoryId}
              setActiveCategory={handleActiveCategoryId}
            />
            <SortPopup />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {status === "loading" ? skeleton : pizzas}
          </div>
          <Pagination
            isLoading={status}
            currentPage={currentPage}
            setCurrentPage={handleCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default Home;
