import { GameListItem } from "../GameListItem";
import styles from "./GamesList.module.css";

const GamesList = ({ games }) => {
  return (
    <ul className={styles.grid}>
      {games?.map(game => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GamesList;
