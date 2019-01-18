import { SearchAction } from "../reducers/searchReducer";

type SetSearch = (input: string) => SearchAction;

export const setSearch: SetSearch = (input) => {
    return {
        type: "SET_SEARCH",
        input,
    };
};