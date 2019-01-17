export const search = (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, input: action.input }
        case "NEWS_FETCH_SUCCESS":
            return { ...state, input: "" };
        default:
            return state;
    }
};