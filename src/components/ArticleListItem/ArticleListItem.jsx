import React from "react";

export const ArticleListItem = ({ article: { objectID, url, title } }) => {
  return (
    <li key={objectID}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
};
