import { Link, useLocation, useParams } from "react-router";
import { games } from "../dataSeed/games";

const GameInfo = () => {
  const { gameId } = useParams();
  const location = useLocation();
  console.log(location.state);

  const game = games.find(({ id }) => id === Number(gameId));

  if (!game) {
    return <div>Such game not founded</div>;
  }

  const backLink = location.state?.from ?? "/games";

  return (
    <div>
      <Link to={backLink}>Back to product</Link>
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
