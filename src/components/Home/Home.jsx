import React, { useEffect, useRef, useState } from "react";
import { getAll } from "@/services/gameService";
import GamesList from "../GameList";
import { Loader } from "../Loader";
import styles from "./Home.module.css";
import { useFetchGames } from "@/hooks";
import { Link } from "react-router";

const Home = () => {
  // const { games, loading, error } = useFetchGames();
  // console.log(loading);

  // const showGames = games && games.length > 0 && !loading;
  // const errorFetch = !games && !loading && error;
  // const [games, setGames] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const controller = useRef();

  // useEffect(() => {
  //   const fetchGames = async () => {
  //     if (controller.current) {
  //       controller.current.abort();
  //     }

  //     controller.current = new AbortController();

  //     setLoading(true);
  //     try {
  //       const resp = await getAll(controller);

  //       setGames(resp);
  //     } catch (error) {
  //       if (error.code !== "ERR_CANCELED") {
  //         setError(error);
  //         console.log(error.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchGames();

  //   return () => {
  //     controller.current.abort();
  //   };
  // }, []);

  return (
    <section className={styles.section}>
      {/* <h1> {String(loading)}</h1> */}
      <p className={styles.emoji}>🎮</p>
      <h1 className={styles.title}>Game Search</h1>
      <p className={styles.subtitle}>Знайди свою наступну улюблену гру</p>
      <Link to="/search_games">Пошук ➡️</Link>

      {/* {loading && <Loader />}
      {showGames && <GamesList games={games} />}
      {errorFetch && <h2>Шось пішло не так 😢</h2>} */}
    </section>
  );
};

export default Home;
