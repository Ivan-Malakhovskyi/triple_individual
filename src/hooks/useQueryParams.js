import toast from "react-hot-toast";
import { useSearchParams } from "react-router";

export const useQueryParams = queryKey => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchGame = searchParams.get(queryKey) ?? "";

  const handleSearch = query => {
    const newParams = query !== "" ? { search: query } : {};
    setSearchParams(newParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const gameSearch = e.target.search.value.trim();

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
