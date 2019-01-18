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

interface IContent {
    isLoading: boolean;
    articles: IArticle[];
    selected: string;
    search: string;
    asc: boolean;
}

class Content extends React.Component<IContent> {
    render(): React.ReactNode {
        if (this.props.isLoading) {
            return (<p>Loading...</p>);
        }

        let articles: IArticle[] = [...this.props.articles];
        if (this.props.selected) {
            articles = articles.filter(x => x.source.name === this.props.selected);
        }

        if (this.props.search) {
            articles = articles.filter(x => x.title.toLowerCase().includes(this.props.search.toLowerCase()));
        }

        articles = articles.sort((a, b) => (""+ a.title).localeCompare(b.title));

        if(!this.props.asc) {
            articles = articles.reverse();
        }
        return (
            <ul className="news-list">
                {articles.map((newsItem, index) => {
                    return (
                        <li key={index} className="news-item">
                            <img src={newsItem.urlToImage} alt={newsItem.title}></img>
                            <label>{newsItem.title}</label>
                            <p>{newsItem.description}</p>
                            <p><i>{newsItem.source.name}</i></p>
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
    search: {
        input: string;
    };
    sort: {
        asc: boolean;
    };
}

type MapStateToProps = (state: IState) => {
    selected: string,
    search: string,
    articles: IArticle[],
    isLoading: boolean,
    asc: boolean,
};

const mapStateToProps: MapStateToProps = (state) => {
    return {
        articles: state.news.articles,
        isLoading: state.news.isLoading,
        selected: state.selection.selected,
        search: state.search.input,
        asc: state.sort.asc,
    };
};

export default connect(mapStateToProps)(Content);