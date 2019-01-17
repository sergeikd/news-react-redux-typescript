export const sort = (state = true, action) => {
    switch (action.type) {
        case "SET_SORT_DIRECTION":
            return {
                ...state,
                asc: action.asc,
            }
        case "NEWS_FETCH_SUCCESS":
            return { ...state, asc: true };
        default:
            return state;
    }
};