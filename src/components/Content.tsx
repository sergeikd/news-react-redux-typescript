import React from "react";
import { connect } from "react-redux";

export interface IArticle {
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
    selected: string;
}

class Content extends React.Component<IArticles> {
    render(): React.ReactNode {
        if (this.props.isLoading) {
            return (<p>Loading...</p>);
        }

        let articles: IArticle[] = [...this.props.articles];
        if (this.props.selected) {
            articles = articles.filter(x => x.source.name === this.props.selected);
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
    }
}

export interface IState {
    news: {
        articles: IArticle[];
        isLoading: boolean;
    };
    selection: {
        selected: string;
    };
}

type MapStateToProps = (state: IState) => {
    selected: string,
    articles: IArticle[],
    isLoading: boolean,
};

const mapStateToProps: MapStateToProps = (state) => {
    return {
        selected: state.selection.selected,
        articles: state.news.articles,
        isLoading: state.news.isLoading,
    };
};

export default connect(mapStateToProps)(Content);