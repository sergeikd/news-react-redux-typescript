const initialState = {
    news: [],
    isLoading: false,
};

export const isLoading = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_ARE_LOADING":
            // return action.isLoading;
            return {...state, isLoading: action.isLoading, news: []};
        default:
            return state;
    }
}

export const news = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_FETCH_SUCCESS":
            // return action.news;
            return {...state, isLoading: false, news: action.news};
        default:
            return state;
    }
}