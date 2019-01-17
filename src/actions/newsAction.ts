import { baseUrl, apiKey} from "../config/appConfig";
import { Dispatch, AnyAction } from "redux";
import { IArticle } from "../components/Content";

type NewsAreLoading = (isLoading: boolean) => {
    type: string;
    isLoading: boolean;
};

export const newsAreLoading: NewsAreLoading = (isLoading) => {
    return {
        type: "NEWS_ARE_LOADING",
        isLoading,
    };
};

type NewsFetch = (news: IArticle[]) => {
    type: string;
    news: IArticle[];
};

export const newsFetchSuccess: NewsFetch  = (news) => {
    return {
        type: "NEWS_FETCH_SUCCESS",
        news,
    };
};

type GetNews = (searchWord: string) => (dispatch: Dispatch<AnyAction>) => void;

export const getNews: GetNews = (searchWord) => {
    const url: string = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
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