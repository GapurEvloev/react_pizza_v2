import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,  
  sort: { name: "rating", sortProperty: "rating", sortOrder: true },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort  = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage  = action.payload;
    },
    setFilters(state, action) {
      state.categoryId  = Number(action.payload.categoryId);
      state.currentPage  = Number(action.payload.currentPage);
      state.sort  = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
