import React from "react";

interface IArticle {
    urlToImage: string;
    title: string;
    description: string;
    source: {
        id: string,
        name: string,
    };
}

interface IArticles {
    isLoading: boolean;
    articles: IArticle[];
}

export const Content: React.SFC<IArticles> = ({ isLoading, articles }): JSX.Element => {
    if (isLoading) {
        return (<p>Loading...</p>);
    }

    return (
        <ul className="news-list">
            {articles.map((newsItem, index) => {
                return (
                    <li key={index} className="news-item">
                        <img src={newsItem.urlToImage} alt={newsItem.title}></img>
                        <label>{newsItem.title}</label>
                        <span>{newsItem.description}</span>
                        <span><i>{newsItem.source.name}</i></span>
                    </li>
                );
            })}
        </ul>
    );
};