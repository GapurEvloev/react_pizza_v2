import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: null,
  activeSort: {
    name: "rating",
    type: "rating",
    order: true,
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategoryId(state, action) {
      state.activeCategoryId = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveCategoryId, setActiveSort, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
