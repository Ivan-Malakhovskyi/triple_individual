import { Link, useLocation } from "react-router";

export const GameListItem = ({ id, title, genre, rating, img }) => {
  const location = useLocation();

  return (
    <Link to={`/games/${id}`} key={id} state={{ from: location }}>
      <span>{img}</span>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{"⭐".repeat(rating)}</p>
    </Link>
  );
};
