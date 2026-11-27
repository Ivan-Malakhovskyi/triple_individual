import { useEffect, useRef, useState } from "react";
import { getGameById } from "@/services/gameService";

export const useFetchGameById = gameId => {
  const [gameDetail, setGameDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(null);

  useEffect(() => {
    if (!gameId) return;

    if (controller.current) {
      controller.current.abort();
    }

    controller.current = new AbortController();

    const getMovieById = async () => {
      try {
        setLoading(true);

        const resp = await getGameById(gameId, controller);

        setGameDetail(resp);
      } catch (error) {
        if (error.code !== "ERR_CANCELLED") {
          setError(error);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getMovieById();

    return () => {
      controller.current?.abort();
    };
  }, [gameId]);

  return {
    gameDetail,
    loading,
    error,
  };
};
