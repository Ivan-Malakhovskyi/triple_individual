import { Link, useParams } from "react-router";
import { games } from "@/dataSeed/games";

const GameInfo = () => {
  const { gameId } = useParams();

  const game = games.find(({ id }) => id === gameId);

  return (
    <div>
      <Link to={{}}>Back to product</Link>
      <h2>
        GAME INFO <b></b>
      </h2>
      <p>{game.title}</p>
      <p>{game.genre}</p>
      <p>{"⭐".repeat(game.rating)}</p>
      <p>{game.description}</p>
      <p>{game.platform}</p>
    </div>
  );
};

export default GameInfo;
