import { Link } from "react-router";
import styles from "./GameListItem.module.css";

export const GameListItem = ({
  game: { id, background_image, name, genres },
}) => {
  // const path = !location.search ? `/games/${id}` : `/search_games/${id}`;

  return (
    <li key={id}>
      <Link to={`/search_games/${id}`}>
        <img className={styles.cardImage} src={background_image} alt={name} />

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardGenre}>
            {genres.map(({ name, id }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
        </div>
      </Link>
    </li>
  );
};
