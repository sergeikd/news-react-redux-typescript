import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { Content } from "./components/Content";
import { themes } from "./config/appConfig";
import { TabMenu } from "./components/tabMenu";
import { getNews } from "./actions/newsAction";

// interface IState {
//   themes: string[];
//   // content: any;
//   activeTab: number;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: themes,
      activeTab: 0,
    };
  }

  componentDidMount() {
    const onLoadActiveTab = 0;
    this.props.fetchData(themes[onLoadActiveTab]);
  }

  onTabClick = (id) => {
    this.setState({ activeTab: id });
    this.props.fetchData(this.state.themes[id]);
  }

  render() {
    return (
      <>
        <TabMenu themes={this.state.themes} activeTab={this.state.activeTab} onTabClick={this.onTabClick} />
        <Content isLoading={this.props.isLoading} articles={this.props.articles} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);

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

export default connect(mapStateToProps, mapDispatchToProps)(App);