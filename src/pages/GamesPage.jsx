import React from "react";
import { useSearchParams } from "react-router";
import GamesList from "@/components/GameList/GamesList";
import { GameSearch } from "@/components/GameSearch/GameSearch";
import { games } from "../dataSeed/games";

const GamesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const game = searchParams.get("search") ?? "";

  const filteredGames = games.filter(({ title }) =>
    title.toLowerCase().includes(game.toLowerCase()),
  ); //![]

  const query = search => {
    const params = search !== "" ? { search } : {};
    setSearchParams(params);
  };

  if (filteredGames.length === 0) {
    return (
      <div>
        <h2>Such game not found</h2>
        <p>Try to change filter {game}</p>
      </div>
    );
  }

  return (
    <>
      <GameSearch game={game} getByQuery={query} />
      <GamesList filtered={filteredGames} />
    </>
  );
};

export default GamesPage;
