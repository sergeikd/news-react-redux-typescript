export type NewsAction = {
    type: string;
    news: [];
    isLoading: boolean;
};

type News = (state: IInitialState, action: NewsAction) => {
    articles: [];
    isLoading: boolean;
};

interface IInitialState {
    articles: [];
    isLoading: boolean;
}

const initialState: IInitialState = {
    articles: [],
    isLoading: true,
};

export const news: News = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_ARE_LOADING":
            return { ...state, isLoading: action.isLoading, articles: [] };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, isLoading: false, articles: action.news };
        default:
            return state;
    }
};