```jsx
export const App = () => {
  const [articleName, setArticleName] = useState("");

  return (
    <section>
      <h1>Http request</h1>

      <SearchForm onSubmit={setArticleName} />
      <Articles articleName={articleName} />

      <ToastContainer autoClose={3000} />
    </section>
  );
};
```

```jsx
export const SearchForm = ({ onSubmit }) => {
  const [articleName, setArticleName] = useState("");

  const handleNameChange = e => {
    setArticleName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (articleName.trim() === "") {
      toast("Введіть назву статті", {
        position: "top-right",
        type: "error",
      });
      return;
    }

    onSubmit(articleName);
    setArticleName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="articleName"
        value={articleName}
        onChange={handleNameChange}
      />
      <button type="submit">
        <FaSearch /> Search
      </button>
    </form>
  );
};
```

```jsx
export const Articles = ({ articleName }) => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => await fetchArticles(articleName);

    fetchData();
  }, [articleName]);

  const fetchArticles = async query => {
    try {
      setStatus(STATUS.PENDING);
      const resp = await articlesAPI.fetchArticles(query);
      setStatus(STATUS.RESOLVED);
      setArticles(resp);
      return resp;
    } catch (error) {
      setStatus(STATUS.REJECTED);
      setError(error);
      throw new Error(`Статей за таким запитом ${query} не знайдено`);
    }
  };

  if (status === STATUS.IDLE) {
    return <p>Введіть назву статті</p>;
  }

  if (status === STATUS.PENDING) {
    return <PendingView articleName={articleName} />;
  }

  if (status === STATUS.RESOLVED) {
    return <ArticlesList articles={articles} />;
  }

  if (status === STATUS.REJECTED) {
    return <ErrorView message={error.message} />;
  }
};
```
