import React from "react";

import { IArticles } from "../../common/interfaces";

export const Content: React.SFC<IArticles> = ({articles}): JSX.Element => {
    return (
        <ul className="news-list">
            {articles.map((newsItem, index) => {
                return (
                    <li key={index} className="news-item">
                        <img src={newsItem.urlToImage} alt={newsItem.title}></img>
                        <label>{newsItem.title}</label>
                        <span>{newsItem.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};