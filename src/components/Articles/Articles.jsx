import { Component } from "react";
import articlesAPI from "@/components/services/articlesService";
import { STATUS } from "../constants/httpStatuses";
import { PendingView } from "../PendingView";
import { ArticlesList } from "../ArticlesList";
import { ErrorView } from "../ErrorView";

export class Articles extends Component {
  state = {
    articles: [],
    status: STATUS.IDLE,
    error: null,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.articleName !== this.props.articleName) {
      this.setState({ status: STATUS.PENDING });
      try {
        const resp = await this.fetchArticles(this.props.articleName);
        this.setState({ articles: resp, status: STATUS.RESOLVED });
      } catch (error) {
        this.setState({ error, status: STATUS.REJECTED });
      }
    }
  };

  fetchArticles = async query => {
    try {
      const resp = await articlesAPI.fetchArticles(query);
      return resp.data.hits;
    } catch (error) {
      throw new Error(`Статей за такиv запитом ${query} не знайдено`);
    }
  };

  render() {
    const { articles, status, error } = this.state;

    if (status === STATUS.IDLE) {
      return <p>Введіть назву статті</p>;
    }

    if (status === STATUS.PENDING) {
      return <PendingView articleName={this.props.articleName} />;
    }

    if (status === STATUS.RESOLVED) {
      return <ArticlesList articles={articles} />;
    }

    if (status === STATUS.REJECTED) {
      return <ErrorView message={error.message} />;
    }
  }
}
