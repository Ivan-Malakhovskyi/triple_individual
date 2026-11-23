export const GameSearch = ({ game, handleSearch }) => {
  return (
    <>
      <label htmlFor="search">
        {" "}
        Search Game
        <input
          type="text"
          name="search"
          value={game}
          onChange={e => handleSearch(e.target.value)}
        />
      </label>
    </>
  );
};
