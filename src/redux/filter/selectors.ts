import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;
export const selectActiveSort = (state: RootState) => state.filter.activeSort;
