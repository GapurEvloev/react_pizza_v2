import React from "react";
import classNames from "classnames";

const SortPopup = () => {
  const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "name", order: "asc" },
  ];
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeSortType, setActiveSortType] = React.useState(sortItems[0]);
  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    setActiveSortType(index);
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div
        onClick={toggleVisiblePopup}
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
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeSortType.name}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems &&
              sortItems.map((objItem) => {
                return (
                  <li
                    key={objItem.type}
                    onClick={() => onSelectItem(objItem)}
                    className={classNames(
                      activeSortType.type === objItem.type && "active"
                    )}
                  >
                    {objItem.name}
                  </li>
                );
              })}
            {/*<li className="active">популярности</li>*/}
            {/*<li>цене</li>*/}
            {/*<li>алфавиту</li>*/}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
