Припустимо, що вже є дерево компонентів, яке має кілька рівнів ієрархії, і
необхідно отримати колекцію елементів від API. Який саме компонент в ієрархії
повинен відповідати за HTTP-запити і зберігання результату відповіді? Якщо не
використовуємо бібліотеку управління станом, то це залежить від трьох критеріїв.

Яким компонентам будуть необхідні отримані дані? Де буде рендеритися індикатор
завантаження, доки виконується HTTP-запит? Де буде рендеритися повідомлення у
разі помилки HTTP-запиту?

# PART 1 ==============================================================

1.  СПОЧАТКУ ПИШЕМО ВСЕ В ОДНОМУ ФАЙЛІ

```js
import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async () => {
  const resp = await axios.get("/search?query=react");
  return resp.data;
};
```

```jsx
import React, { Component } from "react";
import { ArticlesList } from "./components/ArticlesList";
import { fetchArticles } from "./components/services/articlesService";
import { Spinner } from "./components/Spinner";

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const resp = await fetchArticles();
    this.setState({ articles: resp.hits, isLoading: false });
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <section>
        {isLoading && <Spinner width={80} height={80} />}
        <ArticlesList articles={articles} />
      </section>
    );
  }
}
```

## PART 2 ==================================================

```jsx
handleSubmit = e => {
  e.preventDefault();

  // this.props.onSubmit(this.state.articleName);
  this.setState({ articleName: "" });
};
```

2. СТВОРИТИ В APP метод і прокинути його

```jsx
handleSearchArticle = articleName => {
  console.log(articleName);
};
```

ЩОб отримати доступ до даних з інпута в App потрібно його десь зберегти

```js
state = {
  articleName: "",
};

handleSearchArticle = articleName => {
  this.setState({ articleName });
};
```

3. ПОКАЗАТИ В REACT DEV TOOLS

Додаємо перевірку на ""

```jsx
if (this.state.articleName.trim() === "") {
  alert("Пустий пошук");
  return;
}
```

4. React-toastify

https://fkhadra.github.io/react-toastify/introduction/

```jsx
handleSubmit = e => {
  e.preventDefault();

  if (this.state.articleName.trim() === "") {
    toast("Введіть назву статті", {
      type: "error",
    });
    return;
  }

  this.props.onSubmit(this.state.articleName);
  this.setState({ articleName: "" });
};
```

```jsx
<Articles articles={articleName} />
```

SearchForm => App => Articles

5. Де робити http запит => в Articles

Коли компонент робить rerender? Коли змінюється пропс articles => http request

```js
componentDidUpdate = (prevProps, prevState) => {};
```

```jsx
import React, { Component } from "react";
import { fetchArticles } from "../services/articlesService";
import { ArticlesList } from "../ArticlesList";

export class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.articleName;
    const currentName = this.props.articleName;

    if (prevName !== currentName) {
      console.log("RERENDER ");

      this.fetchData(currentName);
    }
  };

  fetchData = async name => {
    try {
      const resp = await fetchArticles(name);

      this.setState({ articles: resp });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    cp - shortcut;
    cs - shortcut;
    return (
      <div>
        <h1>Article Info</h1>
        {this.state.isLoading && <Spinner />}
        {!this.props.articleName && <p>Введіть ім'я статті</p>}
        {this.state.articles.length > 0 && (
          <ArticlesList articles={this.state.articles} />
        )}
      </div>
    );
  }
}
```

6. Error handling

```jsx
fetchData = async name => {
  this.setState({ isLoading: true });
  try {
    const resp = await fetchArticles(name);

    this.setState({ articles: resp });
  } catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }
};

{
  this.state.error && (
    <h1>
      Щось пішло не так, схожих статей з ім'ям{" "}
      <span style={{ textDecoration: "underline" }}>
        {this.props.articleName}
      </span>{" "}
      не знайдено
    </h1>
  );
}
```

Ховати старий контен

### PART 3 STATE MACHINE

**Before state machine**

```jsx
import React, { Component } from "react";
import { fetchArticles } from "../services/articlesService";
import { ArticlesList } from "../ArticlesList";
import { Spinner } from "../Spinner";

export class Articles extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.articleName;
    const currentName = this.props.articleName;

    if (prevName !== currentName) {
      console.log("RERENDER ");

      this.fetchData(currentName);
    }
  };

  fetchData = async name => {
    this.setState({ isLoading: true, articles: [] });
    try {
      const resp = await fetchArticles(name);

      this.setState({ articles: resp });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div>
        <h1>Articles</h1>
        {this.state.error && (
          <h1>
            Щось пішло не так, схожих статей з ім'ям{" "}
            <span style={{ textDecoration: "underline" }}>
              {this.props.articleName}
            </span>{" "}
            не знайдено
          </h1>
        )}
        {this.state.isLoading && <Spinner />}
        {!this.props.articleName && <p>Введіть ім'я статті</p>}
        {this.state.articles.length > 0 && (
          <ArticlesList articles={this.state.articles} />
        )}
      </div>
    );
  }
}
```

**After**

```js
if (status === "idle") {
  return <p>Введіть ім'я статті</p>;
}

if (status === "pending") {
  return <Spinner />;
}

if (status === "rejected") {
  return (
    <h1>
      Щось пішло не так, схожих статей з ім'ям{" "}
      <span style={{ textDecoration: "underline" }}>
        {this.props.articleName}
      </span>{" "}
      не знайдено
    </h1>
  );
}

if (status === "resolved") {
  return <ArticlesList articles={this.state.articles} />;
}
```

```js
BEFORE;
fetchData = async name => {
  this.setState({ isLoading: true, articles: [] });
  try {
    const resp = await fetchArticles(name);

    this.setState({ articles: resp });
  } catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }
};

AFTER;

fetchData = async name => {
  this.setState({ status: "pending" });
  try {
    const resp = await fetchArticles(name);

    this.setState({ articles: resp, status: "resolved" });
  } catch (error) {
    this.setState({ error, status: "rejected" });
  }
};
```

```jsx

Articles.jsx

  render() {
    const { status, error } = this.state;

    if (status === "idle") {
      return <p>Введіть ім'я статті</p>;
    }

    if (status === "pending") {
      return <PendingView articleName={this.props.articleName} />;
    }

    if (status === "rejected") {
      return <ErrorView message="Щось пішло не так" />;
    }

    if (status === "resolved") {
      return <ArticlesList articles={this.state.articles} />;
    }
  }
```

```jsx
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Spinner } from "./components/Spinner";
import { SearchForm } from "./components/SearchForm";
import { Articles } from "./components/Articles";

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    isError: null,
    articleName: "",
  };

  handleSearchArticle = articleName => {
    this.setState({ articleName });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.articleInfo !== this.props.articleInfo) {
      console.log("RERENDER");
    }
  };

  render() {
    const { isLoading, error, articleName } = this.state;

    return (
      <section>
        {isLoading && <Spinner width={80} height={80} />}
        {error && <h1>Щось пішло не так 😢</h1>}

        <SearchForm onSubmit={this.handleSearchArticle} />

        <Articles articleName={articleName} />

        <ToastContainer autoClose={3000} />
      </section>
    );
  }
}
```
