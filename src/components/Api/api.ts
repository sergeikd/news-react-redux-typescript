import { baseUrl, apiKey} from "../../app-data/app-data";
import { IArticles } from "../../common/interfaces";

type GetNews = (searchWord: string) => Promise<IArticles>;

export const getNews: GetNews = (searchWord: string) => {
    const url: string = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
    return fetch(url)
        .then(response => response.json());
};