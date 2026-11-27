import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { getByQuery } from "@/services/gameService";

export const useFetchGameByQuery = searchGame => {
  const [isSearchFailed, setIsSearchFailed] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(null);

  useEffect(() => {
    if (!searchGame) return;

    if (controller.current) {
      controller.current.abort();
    }

    controller.current = new AbortController();

    const fetchByQuery = async () => {
      setIsSearchFailed(false);

      try {
        setLoading(true);
        setError(null);

        const resp = await getByQuery(searchGame, controller);

        if (resp?.length === 0 && searchGame) {
          setIsSearchFailed(true);
          toast.error("Таку гру не знайдено");
          return;
        }

        setGames(resp);
      } catch (error) {
        console.log(error.code);
        if (error.code !== "ERR_CANCELLED") {
          setError(error);
          console.log(error);
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchByQuery();

    return () => {
      controller.current?.abort();
    };
  }, [searchGame]);

  return {
    games,
    loading,
    error,
    isSearchFailed,
  };
};
