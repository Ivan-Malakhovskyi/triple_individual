1. Login.jsx

```jsx
const navigate = useNavigate();
navigate("/games", { replace: true });
<Navigate to="/games" replace />;
```

2. GamePage.jsx

```jsx
const [searchParams, setSearchParams] = useSearchParams();

const game = searchParams.get("search") ?? "";

const filteredGames = games.filter(({ title }) =>
  title.toLowerCase().includes(game.toLowerCase()),
);

const handleSearch = search => {
  const params = search !== "" ? { search } : {};
  setSearchParams(params);
};

if (filteredGames.length === 0) {
  return (
    <div>
      <h2>Such game not found</h2>
      <p>Try to change filter {game}</p>
    </div>
  );
}

  <GameSearch game={game} handleSearch={handleSearch} />
<GamesList filtered={filteredGames} />;
```

Params Like object

```js
const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams],
);
const { name, maxPrice, inStock } = params;
```

Check changes

```jsx
useEffect(() => {
  // Тут виконуємо асинхронну операцію,
  // наприклад HTTP-запит за інформацією про користувача
  if (username === "") return;

  async function fetchUser() {
    const user = await FakeAPI.getUser(username);
    setUser(user);
  }

  fetchUser();
}, [username]);
```

6. useLocation

```jsx
const location = useLocation();

useEffect(() => {
  Analytics.send(location);
}, [location]);
```

location.state

GameListItem.jsx

```jsx
const location = useLocation();
console.log("GameListItem", location);

<Link to={`/games/${id}`} key={id} state={{ from: location }}>
  <span>{img}</span>
  <p>{title}</p>
  <p>{genre}</p>
  <p>{"⭐".repeat(rating)}</p>
</Link>;
```

GameInfo.jsx

```jsx
const { gameId } = useParams();
const location = useLocation();
console.log(location.state);

const game = games.find(({ id }) => id === Number(gameId));

if (!game) {
  return <div>Such game not founded</div>;
}

const backLink = location.state?.from ?? "/games";
```
