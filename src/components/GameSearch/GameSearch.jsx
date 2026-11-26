import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useQueryParams, useFetchGameByQuery } from "@/hooks";
import { getByQuery } from "@/services/gameService";
import GamesList from "../GameList";
import { Loader } from "../Loader";
import styles from "./GameSearch.module.css";

export const GameSearch = () => {
  // const [games, setGames] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { searchGame, handleFormSubmit } = useQueryParams("queryKey");

  const { loading, error, games, searchFailed } =
    useFetchGameByQuery(searchGame);

  const showGames = games && games.length !== 0 && !loading;
  const emptySearchResult = searchFailed && games.length === 0 && !loading;
  const errorFetch = !games && !loading && error;
  // const [searchFailed, setSearchFailed] = useState(false);

  // const controller = useRef();

  // useEffect(() => {
  //   if (!searchGame) return;

  //   if (controller.current) {
  //     controller.current.abort();
  //   }

  //   controller.current = new AbortController();

  //   const fetchByQuery = async () => {
  //     setSearchFailed(false);

  //     try {
  //       setLoading(true);
  //       setError(null);

  //       const resp = await getByQuery(searchGame, controller);

  //       if (resp?.length === 0 && searchGame) {
  //         setSearchFailed(true);
  //         toast.error("Таку гру не знайдено");
  //       }

  //       setGames(resp);
  //     } catch (error) {
  //       if (error.code !== "ERR_CANCELLED") {
  //         console.log(error.name);
  //         setError(error);
  //       }
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchByQuery();

  //   return () => {
  //     controller.current.abort();
  //   };
  // }, [searchGame]);

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Пошук гри..."
          className={styles.search}
        />

        <button className={styles.submitBtn}>Знайти</button>
      </form>

      {showGames && <GamesList games={games} />}
      {loading && <Loader />}
      {emptySearchResult && <h2>Таку гру не знайдено</h2>}
      {errorFetch && <h2>Щось пішло не так 😢</h2>}
    </section>
  );
};
