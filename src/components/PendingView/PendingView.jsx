import React from "react";
import { Spinner } from "../Spinner";
import { ArticlesList } from "../ArticlesList";

export const PendingView = ({ articleName }) => {
  const articlesSkeleton = Array.from({ length: 10 }, () => ({
    title: articleName,
    url: "http://example.com",
    objectID: crypto.randomUUID(),
  }));

  return (
    <div>
      <div>
        <Spinner />
      </div>

      <ArticlesList articles={articlesSkeleton} />
    </div>
  );
};
