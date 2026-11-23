import { GameListItem } from "../GameListItem";
import styles from "./GamesList.module.css";

const GamesList = ({ filtered }) => {
  return (
    <ul className={styles.games_list}>
      {filtered.map(game => (
        <GameListItem key={game.id} {...game} />
      ))}
    </ul>
  );
};

export default GamesList;
