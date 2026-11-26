import { useSearchParams } from "react-router";
import toast from "react-hot-toast";

export const useQueryParams = ({ games, queryKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchGame = searchParams.get(queryKey) ?? "";

  const handleSearch = query => {
    const newParams = query !== "" ? { queryKey: query } : {};
    setSearchParams(newParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const gameSearch = e.target.queryKey.value.trim();

    if (!gameSearch) {
      toast.error("Введіть назву гри");
      return;
    }

    handleSearch(gameSearch);
    e.target.reset();
  };

  return {
    searchGame,
    handleSearch,
    handleFormSubmit,
  };
};
