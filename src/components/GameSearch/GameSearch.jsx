export const GameSearch = ({ game, getByQuery }) => {
  return (
    <>
      <label htmlFor="search">
        {" "}
        Search Game
        <input
          type="text"
          name="search"
          value={game}
          onChange={e => getByQuery(e.target.value)}
        />
      </label>
    </>
  );
};
