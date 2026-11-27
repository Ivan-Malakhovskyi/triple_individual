import { useQueryParams, useFetchGameByQuery } from "@/hooks";
import GamesList from "../GameList";
import { Loader } from "../Loader";
import styles from "./GameSearch.module.css";

export const GameSearch = () => {
  const { searchGame, handleFormSubmit } = useQueryParams("search");

  const { loading, error, games, searchFailed } =
    useFetchGameByQuery(searchGame);

  const showGames = games && games.length !== 0 && !loading;
  const emptySearchResult = searchFailed && games.length === 0 && !loading;
  const errorFetch = !games && !loading && error;

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
