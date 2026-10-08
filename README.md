# Тема 19. useMemo(), useCallback(), useReducer

1. useMemo()

Якщо я натисну на count, то зміниться стан і компонент перерендериться,
оскільки, коли в нас відбуається rerender, коли змінюється або стан або пропси

Але count ніяк не відноситься до мого фільтра

```js
const [count, setCount] = useState(0);
const [friends, setFriends] = useState(initialData);
const [query, setQuery] = useState("");

const filteredFriends = friends.filter(({ name }) =>
  name.toLowerCase().includes(query),
);
```

ДОКАЗ ТОГО ЩО відбувається render при зміні count

```js
const filteredFriends = (() => {
  console.log("RENDER" + Date.now());
  return friends.filter(({ name }) => name.toLowerCase().includes(query));
})();
```

```js
const filteredFriends = useMemo(() => {
  console.log("RENDER" + Date.now());
  return friends.filter(({ name }) => name.toLowerCase().includes(query));
}, [query, friends]);
```

Але маєте пам'ятати, що не завжди це добре, мемоізація це також виконнаня
якогосб коду, яка може бути дорожчою за повторний рендер. В даному випадку
колекція занадто мала

React devtools Profiler

## useReducer() -хук для керування більш складним станом, наприклад, щоб

зберігати в одному об'єкті і error, status, articles 2

2.

state - стан dispatch - функція для відправки reducer - функція, яка приймає
state, action

```js
const [state, dispatch] = useReducer(first, second, third);
```

```js
const countReducer = (prevState, nextState) => {
ret
};


const [counter, setCounter] = useReducer(countReducer, 0);

      <p>Count {counter}</p>

      <button type="button" onClick={() => setCounter(1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCounter(1)}>
        Decrement
      </button>
```

Те що передаємо в setCounter(1) запишеться в nextState, а попередній стан в
prevState

тут приходить Action - дія, що ми хочемо зробити

```jsx
setCounter({
  type: "increment",
  payload: 1,
});

setCounter({
  type: "decrement",
  payload: 1,
});
```

```jsx
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      return state;
  }
};
```

ЗМІНЮЄМО на dispatch

REDUCER - функція, яка під капотом отримує стан і змінює його

Стан може бути і об'єктом

```jsx

  const [counter, dispatch] = useReducer(countReducer, {
    count: 0,
  });

    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
```

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
