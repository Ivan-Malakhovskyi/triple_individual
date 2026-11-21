import { useLocation } from "react-router";
import { GameListItem } from "../GameListItem/GameListItem";
import styles from "./GamesList.module.css";

const GamesList = ({ filtered }) => {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={styles.games_list}>
      {filtered.map(game => (
        <GameListItem key={game.id} {...game} />
      ))}
    </ul>
  );
};

export default GamesList;
