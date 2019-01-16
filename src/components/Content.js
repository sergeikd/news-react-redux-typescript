import React, { Component } from "react";

export class Content extends Component {

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
