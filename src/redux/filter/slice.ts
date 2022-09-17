import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortTypeEnum } from './types';

const initialState = {
    searchValue: "",
    activeCategoryId: 0,
    currentPage: 1,
    activeSort: {
        name: "rating",
        type: SortTypeEnum.RATING,
        order: true,
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setActiveCategoryId(state, action: PayloadAction<number>) {
            state.activeCategoryId = action.payload;
        },
        setActiveSort(state, action: PayloadAction<Sort>) {
            state.activeSort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.activeCategoryId = Number(action.payload.activeCategoryId);
            state.currentPage = Number(action.payload.currentPage);
            state.activeSort = action.payload.activeSort;
        },
    },
});

export const {
    setSearchValue,
    setActiveCategoryId,
    setActiveSort,
    setCurrentPage,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;