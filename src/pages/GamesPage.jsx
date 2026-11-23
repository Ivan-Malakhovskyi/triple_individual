import React from "react";
import GamesList from "@/components/GameList";
import { GameSearch } from "@/components/GameSearch";
import { games } from "../dataSeed/games";

const GamesPage = () => {
  return (
    <>
      <GameSearch game={{}} handleSearch={() => {}} />
      <GamesList filtered={games} />
    </>
  );
};

export default GamesPage;
