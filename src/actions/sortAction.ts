import { SortAction } from "../reducers/sortReducer";

type SetSortDirection = (asc: boolean) => SortAction;

export const setSortDirection: SetSortDirection = (asc) => {
    return {
        type: "SET_SORT_DIRECTION",
        asc,
    };
};