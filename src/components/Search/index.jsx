import React from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../App";

import styles from "./Search.module.sass";

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce(str => {
      setSearchValue(str);
    }, 500),
    []
  );
  
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value  );
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput  }
        className={styles.input}
        type="text"
        name="search"
        id="header-search"
        placeholder="Find pizza..."
      />
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="Layer 2">
          <path d="M13 23a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
          <path d="M28 29a1 1 0 0 1-.71-.29l-8-8a1 1 0 0 1 1.42-1.42l8 8a1 1 0 0 1 0 1.42A1 1 0 0 1 28 29Z" />
        </g>
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h32v32H0z"
        />
      </svg>
      {value && (
        <svg
          onClick={onClickClear }
          className={styles.remove}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name="Layer 2">
            <path d="M4 29a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l24-24a1 1 0 1 1 1.42 1.42l-24 24A1 1 0 0 1 4 29Z" />
            <path d="M28 29a1 1 0 0 1-.71-.29l-24-24a1 1 0 0 1 1.42-1.42l24 24a1 1 0 0 1 0 1.42A1 1 0 0 1 28 29Z" />
          </g>
          <path
            style={{
              fill: "none",
            }}
            d="M0 0h32v32H0z"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
