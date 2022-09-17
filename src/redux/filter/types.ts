export enum SortTypeEnum {
    RATING = 'rating',
    TITLE = 'title',
    PRICE = 'price',
}

export type Sort = {
    name: string;
    type: SortTypeEnum;
    order: boolean;
};

export interface FilterSliceState {
    searchValue: string;
    activeCategoryId: number;
    currentPage: number;
    activeSort: Sort;
}
