import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setSearch } from "../actions/searchAction";
import { IState } from "./Content";

type ChangeSearch = (search: string) => {
    type: string;
    input: string;
};

interface ISearch {
    input: string;
}

interface ISearchProps {
    changeSearch: ChangeSearch;
}

class Search extends React.Component<ISearchProps, ISearch> {
    constructor(props: ISearchProps) {
        super(props);
        this.state = {
            input: "",
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentInput: string = event.target.value;
        this.setState({ input: currentInput });
        this.props.changeSearch(currentInput);
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="delimeter">Search: </div>
                <input type="text" size={5} value={this.state.input} onChange={this.handleChange} />
            </>
        );
    }
}

type MapStateToProps = (state: IState) => {
    input: string,
};

const mapStateToProps: MapStateToProps = (state) => {
    return {
        input: state.search.input,
    };
};

type MapDispatchToProps = (dispatch: Dispatch) => {
    changeSearch: ChangeSearch;
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
    return {
        changeSearch: (input) => dispatch(setSearch(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);