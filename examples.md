1. Redirect after login

Login.jsx

```jsx
navigate("/search_games", { replace: true });
```

2. SearchQuery useQueryParams.js

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const searchGame = searchParams.get(queryKey) ?? "";

const handleSearch = query => {
  const newParams = query !== "" ? { search: query } : {};
  setSearchParams(newParams);
};
```

3. GameInfo.jsx

```jsx
const { gameId } = useParams();
const location = useLocation();
const backLink = location.state?.from ?? "/search_games";

<Link to={backLink} className={styles.back}>
  Повернутися до колекції
</Link>;

<NavLink
  to={`/search_games/${gameId}/reviews`}
  className={({ isActive }) =>
    isActive ? `${styles.tab} ${styles.tabActive}` : ""
  }
  state={backLink}
>
  Відгуки
</NavLink>;
```

GameListItem.jsx

```jsx
  const location = useLocation();

  <Link to={`/search_games/${id}`} state={{ from: location }}>
```

4. Http abort useFetchByQuery.jsx

```jsx
const [isSearchFailed, setIsSearchFailed] = useState(false);

const controller = useRef(null);

useEffect(() => {
  if (!searchGame) return;

  if (controller.current) {
    console.log("NEED TO CANCEL");
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
      if (error.code !== "ERR_CANCELLED") {
        console.log(error.name);
        setError(error);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchByQuery();

  return () => {
    controller.current.abort();
  };
}, [searchGame]);
```

```jsx
export const getByQuery = async (query = "", controller) => {
  try {
    const resp = await apiClient.get(`/games?key=${KEY}&search=${query}`, {
      signal: controller?.current?.signal,
    });

    return resp.data.results;
  } catch (error) {
    console.log("🚀 ~ getAll ~ error:", error);
  }
};
```

5. Code splitting + lazy

```jsx
const GameInfoPage = lazy(() => import("./pages/GameInfoPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
```
