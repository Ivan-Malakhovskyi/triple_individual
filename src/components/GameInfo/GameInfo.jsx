import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { useFetchGameById } from "@/hooks";
import styles from "./GameInfo.module.css";

const GameInfo = () => {
  const { gameId } = useParams();
  const { loading, error, gameDetail } = useFetchGameById(Number(gameId));
  const location = useLocation();
  const backLink = location.state?.from ?? "/search_games";

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
