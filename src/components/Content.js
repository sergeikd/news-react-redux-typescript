import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/newsAction";

class Content extends Component {
    componentDidMount() {
        this.props.fetchData("Trump");
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (            
            <ul className="news-list">
                {this.props.articles.map((newsItem, index) => {
                    return (
                        <li key={index} className="news-item">
                            <img src={newsItem.urlToImage} alt={newsItem.title}></img>
                            <label>{newsItem.title}</label>
                            <span>{newsItem.description}</span>
                            <span><i>{newsItem.source.name}</i></span>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        articles: state.news.articles,
        isLoading: state.news.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (searchWord) => dispatch(getNews(searchWord))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
