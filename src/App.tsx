import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import { themes } from "./config/appConfig";
import { TabMenu } from "./components/tabMenu";
import { getNews } from "./actions/newsAction";

interface IState {
  themes: string[];
  // content: any;
  activeTab: number;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      themes: themes,
      activeTab: 0,
    };
  }

  onTabClick: (id: number) => void = (id) => {
    this.setState({ activeTab: id });
    getNews(this.state.themes[id]);
    //   .then(data => this.setState({ content: data.articles }));
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

export default App;