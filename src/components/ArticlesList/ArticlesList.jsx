import React from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

export const ArticlesList = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => (
        <ArticleListItem key={article.objectID} article={article} />
      ))}
    </ul>
  );
};
