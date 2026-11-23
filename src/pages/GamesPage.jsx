import React from "react";
import { useSearchParams } from "react-router";
import GamesList from "@/components/GameList";
import { GameSearch } from "@/components/GameSearch";
import { games } from "../dataSeed/games";

const GamesPage = () => {
  const [searchParams, setSetSearchParams] = useSearchParams();

  const game = searchParams.get("searchGame") ?? "";

  const filteredGames = games.filter(({ title }) =>
    title.toLowerCase().includes(game.toLowerCase()),
  ); //! []

  const handleSearchGame = searchGame => {
    const params = searchGame !== "" ? { searchGame } : {};
    setSetSearchParams(params);
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
      <GameSearch game={game} handleSearch={handleSearchGame} />
      <GamesList filtered={filteredGames} />
    </>
  );
};

export default GamesPage;
