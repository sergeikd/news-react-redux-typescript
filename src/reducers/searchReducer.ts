export type SearchAction = {
    type: string;
    input: string;
};

const initialState: {input: string} = {
    input: "",
};

type Search = (state: {input: string}, action: SearchAction) => {
    input: string,
};

export const search: Search = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, input: action.input };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, input: "" };
        default:
            return state;
    }
};