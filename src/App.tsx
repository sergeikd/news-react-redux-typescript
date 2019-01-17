import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import "./App.css";
import Content from "./components/Content";
import { themes } from "./config/appConfig";
import { TabMenu } from "./components/TabMenu";
import { getNews } from "./actions/newsAction";

interface IAppState {
  themes: string[];
  activeTab: number;
}

interface IAppProps {
  fetchData: (searchWord: string) => void;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      themes: themes,
      activeTab: 0,
    };
  }

  componentDidMount(): void {
    const onLoadActiveTab: number = 0;
    this.props.fetchData(themes[onLoadActiveTab]);
  }

  onTabClick = (id: number) => {
    this.setState({ activeTab: id });
    this.props.fetchData(this.state.themes[id]);
  }

  render(): React.ReactNode {
    return (
      <>
        <TabMenu themes={this.state.themes} activeTab={this.state.activeTab} onTabClick={this.onTabClick} />
        <Content />
      </>
    );
  }
}

type MapDispatchToProps =  (dispatch: (dispatch: (dispatch: Dispatch<AnyAction>) => void) => void) => {
  fetchData: (searchWord: string) => void;
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchWord) => dispatch(getNews(searchWord))
  };
};

export default connect(null, mapDispatchToProps)(App);