import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSort } from "../../redux/slices/filtreSlice";

export const sortItems = [
  { name: "rating", type: "rating", order: true },
  { name: "price", type: "price", order: true },
  { name: "alphabet", type: "title", order: true },
];

const SortPopup = ({ isLoading }) => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.filter.activeSort);

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
      console.log("click outside");
    }
  };

  const onSelectItem = (obj) => {
    dispatch(setActiveSort({ ...activeSort, name: obj.name, type: obj.type }));
    setVisiblePopup(false);
  };

  const setSortOrder = (order) => {
    dispatch(setActiveSort({ ...activeSort, order }));
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    // удаление слушателя для body
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={classNames("sort", isLoading && "disabled")}>
      <div
        className={classNames(
          "sort__label",
          visiblePopup && "sort__label--active"
        )}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sort__label-triangle"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort&nbsp;by:</b>
        <span onClick={toggleVisiblePopup}>{activeSort.name}</span>
        <div
          onClick={() => setSortOrder(!activeSort.order)}
          className={`sort__order${
            activeSort.order ? " sort__order--asc" : " sort__order--desc"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 256 256"
          >
            <g fill="#000" strokeMiterlimit="10" strokeWidth="1">
              <path
                d="M87 22.681H33.355a3 3 0 110-6H87a3 3 0 110 6zM74.016 39.561h-40.66a3 3 0 110-6h40.66a3 3 0 110 6zM61.032 56.439H33.355a3 3 0 110-6h27.677a3 3 0 110 6zM48.048 73.319H33.355a3 3 0 110-6h14.692a3 3 0 01.001 6zM11.629 73.319a3 3 0 01-3-3V19.681a3 3 0 116 0v50.638a3 3 0 01-3 3z"
                transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
              ></path>
              <path
                d="M3 31.311A2.998 2.998 0 01.879 26.19l8.629-8.629a3 3 0 014.242 0l8.63 8.629a3 3 0 11-4.243 4.243l-6.509-6.508-6.508 6.508a2.987 2.987 0 01-2.12.878z"
                transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems &&
              sortItems.map((objItem) => {
                return (
                  <li
                    key={objItem.name}
                    onClick={() => onSelectItem(objItem)}
                    className={classNames(
                      activeSort.type === objItem.type && "active"
                    )}
                  >
                    {objItem.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
