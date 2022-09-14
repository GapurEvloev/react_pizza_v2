import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: 0,
  currentPage: 1,
  activeSort: {
    name: "rating",
    type: "rating",
    order: true,
  },
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
    setFilters(state, action) {
      state.activeCategoryId = Number(action.payload.activeCategoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.activeSort = action.payload.activeSort;
    },
  },
});

export const {
  setActiveCategoryId,
  setActiveSort,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
