1. Refactor App
2. Refactor SearchForm
3. Refactor Articles

useReducer

опціонально init: Функція ініціалізатора, яка повинна повернути початковий стан.
Якщо її не вказано, початковий стан буде встановлено у initialArg. В іншому
випадку, початковий стан встановлюється до результату виклику init(initialArg).

```js
function init(params) {
  return params + 5;
}

const [state, dispatch] = useReducer(
  articlesReducer,
  {
    status: STATUS.IDLE,
    articles: [],
    error: null,
  },
  init,
);
```

І тоді ,якщо передати init, то результатом функції init буде початковий стан
reducer, а якщо не передати init, то початковий стан буде таким яким його
передав, наприклад

'

```js
const [state, dispatch] = useReducer(articlesReducer, 0);
```

```js
function init(initialState) {
  return { ...initialState, count: initialState.count + 10 };
}
```
