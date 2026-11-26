import { useEffect, useRef, useState } from "react";
import { getAll } from "@/services/gameService";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const controller = useRef(null);

  useEffect(() => {
    if (controller.current) {
      controller.current.abort();
    }

    controller.current = new AbortController();

    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const resp = await getAll(controller);

        setGames(resp);
      } catch (error) {
        if (error.code !== "ERR_CANCELLED") {
          setError(error);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGames();

    return () => {
      controller.current.abort();
    };
  }, []);

  return {
    games,
    error,
    loading,
  };
};
