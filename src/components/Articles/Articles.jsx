import React, { Component } from "react";
import articlesAPI from "../services/articlesService";
import { ArticlesList } from "../ArticlesList";
import { ErrorView } from "../ErrorView";
import { PendingView } from "../PendingView";

export class Articles extends Component {
  state = {
    articles: [],
    error: null,
    status: "idle",
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.articleName;
    const currentName = this.props.articleName;

    if (prevName !== currentName) {
      console.log("RERENDER ");

      this.fetchData(currentName);
    }
  };

  fetchData = async name => {
    this.setState({ status: "pending" });
    try {
      const resp = await articlesAPI.fetchArticles(name);

      this.setState({ articles: resp, status: "resolved" });
    } catch (error) {
      this.setState({ error, status: "rejected" });
    }
  };

  render() {
    const { status } = this.state;

    if (status === "idle") {
      return <p>Введіть ім'я статті</p>;
    }

    if (status === "pending") {
      return <PendingView articleName={this.props.articleName} />;
    }

    if (status === "rejected") {
      return <ErrorView message="Щось пішло не так" />;
    }

    if (status === "resolved") {
      return <ArticlesList articles={this.state.articles} />;
    }
  }
}
