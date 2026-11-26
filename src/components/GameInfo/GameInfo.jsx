import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { useFetchGameById } from "@/hooks";
import { getGameById } from "@/services/gameService";
import styles from "./GameInfo.module.css";

const GameInfo = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [gameDetail, setGameDetail] = useState([]);
  const { gameId } = useParams();
  const location = useLocation();
  const { loading, error, gameDetail } = useFetchGameById(gameId);
  const controller = useRef();

  // const redirectPath = !location.pathname.includes("search")
  //   ? "/"
  //   : "/search_games";
  // const forwardLink = location.pathname.includes("search")
  //   ? "search_games"
  //   : "games";

  const backLink = location.state?.from ?? "/search_games";

  // useEffect(() => {
  //   if (!gameId) return;

  //   const getMovieById = async () => {
  //     if (controller.current) {
  //       controller.current.abort();
  //     }

  //     controller.current = new AbortController();

  //     try {
  //       setLoading(true);

  //       const resp = await getGameById(gameId, controller);

  //       setGameDetail(resp);
  //     } catch (error) {
  //       if (error.code !== "ERR_CANCELLED") {
  //         setError(error);
  //         console.log(error);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getMovieById();
  // }, [gameId]);

  return (
    <section>
      <Link to={backLink} className={styles.back}>
        Повернутися до колекції
      </Link>

      {!gameDetail && !loading && error && <div>Щось пішло не так</div>}

      {!loading && gameDetail && (
        <div className={styles.card}>
          <img
            className={styles.cardImage}
            src={gameDetail.background_image}
            alt={name}
          />

          <span className={styles.cardHeader}>{gameDetail.released}</span>
          <div>
            <h1 className={styles.cardTitle}>{gameDetail.name}</h1>
            <p className={styles.cardGenre}>{gameDetail.genre}</p>
          </div>

          <p className={styles.cardDesc}>{gameDetail.description}</p>

          <div>
            <span>{gameDetail.year}</span>
            <span>{gameDetail.platform}</span>
          </div>

          <div className={styles.tabs}>
            <NavLink
              to={`/search_games/${gameId}/reviews`}
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.tabActive}` : ""
              }
              state={backLink}
            >
              Відгуки
            </NavLink>

            <NavLink
              to={`/search_games/${gameId}/new_review`}
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.tabActive}` : ""
              }
              state={backLink}
            >
              Новий відгук
            </NavLink>
          </div>

          <Outlet />
        </div>
      )}
    </section>
  );
};

export default GameInfo;
