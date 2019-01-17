import { baseUrl, apiKey} from "../config/appConfig";

export const newsAreLoading = (isLoading) => {
    return {
        type: "NEWS_ARE_LOADING",
        isLoading,
    };
};

export const newsFetchSuccess = (news) => {
    return {
        type: "NEWS_FETCH_SUCCESS",
        news,
    };
};

export const getNews = (searchWord) => {
    const url = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
    return (dispatch) => {
        dispatch(newsAreLoading(true));

        fetch(url)
            .then((response) => {
                dispatch(newsAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch(newsFetchSuccess(data.articles)))
    };
};