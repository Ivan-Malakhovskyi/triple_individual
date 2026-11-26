import toast from "react-hot-toast";

export const useQueryParams = queryKey => {
  const searchGame = "";
  const handleSearch = () => {};

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
