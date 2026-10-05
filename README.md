1. Де і коли робити http запити ?

- Яким компонентам будуть необхідні отримані дані?
- Де буде рендеритися індикатор завантаження, доки виконується HTTP-запит?
- Де буде рендеритися повідомлення у разі помилки HTTP-запиту?

2. Базовий приклад
3. Створення App, компоненти:

- Фільтер за ключовим словом
- показувати знайдений елемент

4. Флоу даних SearchForm => App => Articles
5. HTTP request в Articles
6. Error handling
7. Ховаємо старий контент, коли відбувається запит за новим
8. State machine, statuses:

- idle - запита ще не має
- pending - loading
- rejected - ❌
- resolved - ✅

Плюси такого підходу

- не потрібно скидати поля
- не потрібно слідкувати за станами полів
- зрозуміла поведінка рендеру розмітки

9. Розносимо розмітку в render() по окремих компонентах

Fetch Не ловить 404, тому все що не 404 попаде в catch, а якщо буде 404, то ми
його зловимо

```js
return Promise.reject(
  new Error(`Такої статті не знайдено ${this.props.articleName}`),
);
```

```js

      fetch(
        `http://hn.algolia.com/api/v1/searh?query=${this.props.articleName}`,
      )
        .then(resp => {
          if (resp.ok) {
          }
          return resp.json();

          return Promise.reject(
            new Error(`Такої статті не знайдено ${this.props.articleName}`),
          );
        })
        .then(resp =>
          this.setState({ articles: resp.hits, status: "resolved" }),
        )
        .catch(error => this.setState({ error, status: "rejected" }));

      // await this.fetchArticles(this.props.articleName);
    }
```

як робиться кастомізація в axios

```js
const fetchArticles = async query => {
  try {
    const resp = await axios.get(`/searc?query=${query}`);
    return resp.data.hits;
  } catch (error) {
    throw new Error(`Статей за такиv запитом ${query} не знайдено`);
  }
};

export default {
  fetchArticles,
};

fetchArticles = articleName =>
  articlesAPI
    .fetchArticles(articleName)
    .then(data => data)
    .catch(error => {
      return Promise.reject(
        new Error(`Статей за таким запитом ${articleName} не знайдено`),
      );
    });
```
