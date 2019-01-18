import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setSortDirection } from "../actions/sortAction";
import { IState } from "./Content";

type ChangeSort = (asc: boolean) => {
    type: string;
    asc: boolean;
};

interface ISort {
    asc: boolean;
    changeSort: ChangeSort;
}

class Sort extends React.Component<ISort> {
    componentDidMount(): void {
        const initialSorting: boolean = true;
        this.props.changeSort(initialSorting);
    }

    handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        this.props.changeSort(event.currentTarget.textContent === "Z-A");
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="delimeter">Sort: </div>
                <span onClick={this.handleClick}>{this.props.asc ? "A-Z" : "Z-A"}</span>
            </>
        );
    }
}

type MapStateToProps = (state: IState) => {
    asc: boolean,
};

const mapStateToProps: MapStateToProps = (state) => {
    return {
        asc: state.sort.asc,
    };
};

type MapDispatchToProps = (dispatch: Dispatch) => {
    changeSort: ChangeSort;
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
    return {
        changeSort: (asc) => dispatch(setSortDirection(asc))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);