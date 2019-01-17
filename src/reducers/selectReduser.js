
export const selection = (state = "", action) => {
    switch (action.type) {
        case "SET_SELECTION":
            return {
                ...state,
                selected: action.select,
            }
        case "NEWS_FETCH_SUCCESS":
            return { ...state, selected: "" };
        default:
            return state;
    }
};