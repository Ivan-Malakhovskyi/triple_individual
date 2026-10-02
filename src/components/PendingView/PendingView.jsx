import React from "react";
import { Spinner } from "../Spinner";
import { ArticleListItem } from "../ArticleListItem";

export const PendingView = ({ articleName }) => {
  const articleSkeleton = {
    title: (
      <h2>
        Current search query <b>{articleName}</b>
      </h2>
    ),
    url: "http://example.com",
    objectID: crypto.randomUUID(),
  };

  return (
    <div>
      <div>
        <Spinner />
      </div>

      <ArticleListItem article={articleSkeleton} />
    </div>
  );
};
