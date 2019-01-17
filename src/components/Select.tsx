import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IArticle, IState } from "./Content";
import { setSelection } from "../actions/selectAction";

type ChangeSelect = (select: string) => {
    type: string;
    select: string;
};

interface ISelect {
    articles: IArticle[];
    selected: string;
    changeSelect: ChangeSelect;
}

class Select extends React.Component<ISelect> {
    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected: string = event.target.value;
        this.props.changeSelect(selected === "Not selected" ? "" : selected);
    }

    render(): React.ReactNode {
        const sourceArr: string[] = this.props.articles.map((item) => {
            return (item.source.name);
        });
        const unique: string[] = [...new Set(sourceArr)];
        unique.unshift("Not selected");
        return (
            <>
                <div className="delimeter">Source: </div>
                <select value={this.props.selected} onChange={this.handleChange}>
                    {unique.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        );
                    })}
                </select>
            </>
        );
    }
}

type MapStateToProps = (state: IState) => {
    selected: string,
    articles: IArticle[],
};

const mapStateToProps: MapStateToProps = (state) => {
    return {
        selected: state.selection.selected,
        articles: state.news.articles,
    };
};

type MapDispatchToProps = (dispatch: Dispatch) => {
    changeSelect: ChangeSelect;
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
    return {
        changeSelect: (select: string) => dispatch(setSelection(select))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);