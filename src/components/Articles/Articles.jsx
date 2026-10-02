import React, { Component } from "react";
import articlesAPI from "../services/articlesService";
import { ArticlesList } from "../ArticlesList";
import { ErrorView } from "../ErrorView";
import { PendingView } from "../PendingView";

// idle - стан простою
// pending - завантаження
// resolved - успіх ✅
// rejected - ❌

export class Articles extends Component {
  state = {
    articles: [],
    status: "idle",
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.articleName !== this.props.articleName) {
      await this.fetchArticles(this.props.articleName);
    }
  };

  fetchArticles = async articleName => {
    this.setState({ status: "pending" });
    try {
      const resp = await articlesAPI.fetchArticles(articleName);
      this.setState({ articles: resp, status: "resolved" });
    } catch (error) {
      this.setState({ error, status: "rejected" });
    }
  };

  render() {
    const { articles, status } = this.state;

    if (status === "idle") {
      return <p>Введіть назву статті</p>;
    }

    if (status === "pending") {
      return <PendingView />;
    }

    if (status === "resolved") {
      return <ArticlesList articles={articles} />;
    }

    if (status === "rejected") {
      return <ErrorView message="Щось пішло не так" />;
    }
  }
}
