const initialState = {
    articles: [],
    isLoading: true,
};

export const news = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_ARE_LOADING":
            return { ...state, isLoading: action.isLoading, articles: [] };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, isLoading: false, articles: action.news };
        default:
            return state;
    }
}