import React, { Component, useEffect, useReducer } from "react";
import articlesAPI from "../services/articlesService";
import { ArticlesList } from "../ArticlesList";
import { ErrorView } from "../ErrorView";
import { PendingView } from "../PendingView";
import axios from "axios";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const articlesReducer = (state, action) => {
  switch (action.type) {
    case "pendingArticles":
      return { ...state, status: STATUS.PENDING };

    case "resolvedArticles":
      return {
        ...state,
        articles: action.payload,
        status: STATUS.RESOLVED,
      };

    case "rejectedArticles":
      return { ...state, error: action.payload, status: STATUS.REJECTED };

    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

function init(initialState) {
  return { ...initialState, count: initialState.count + 10 };
}

export const Articles = ({ articleName }) => {
  const [state, dispatch] = useReducer(
    articlesReducer,
    {
      status: STATUS.IDLE,
      articles: [],
      error: null,
      count: 0,
    },
    init,
  );

  // const [articles, setArticles] = useState([]);
  // const [status, setStatus] = useState("idle");
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => await fetchArticles(articleName);

    fetchData();
  }, [articleName]);

  const fetchArticles = async query => {
    if (!query) {
      return;
    }

    try {
      // setStatus(STATUS.PENDING);
      dispatch({
        type: "pendingArticles",
      });

      const resp = await articlesAPI.fetchArticles(query);

      dispatch({
        type: "resolvedArticles",
        payload: resp,
      });
      // setStatus(STATUS.RESOLVED);
      // setArticles(resp);
    } catch (error) {
      // setStatus(STATUS.REJECTED);
      // setError(error);

      if (axios.isAxiosError(error)) {
        const newError = new Error(
          `Статей за таким запитом ${query} не знайдено`,
        );

        dispatch({
          type: "rejectedArticles",
          payload: newError,
        });

        // throw newError;
      }
    }
  };

  const { status, error, articles } = state;

  if (status === STATUS.IDLE) {
    return <p>Введіть назву статті</p>;
  }

  if (status === STATUS.PENDING) {
    return <PendingView articleName={articleName} />;
  }

  if (status === STATUS.RESOLVED) {
    return <ArticlesList articles={articles} />;
  }

  if (status === STATUS.REJECTED) {
    return <ErrorView message={error.message} />;
  }
};

export class ArticlesOld extends Component {
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
