Тема 19. useMemo(), useCallback(), useReducer

1. useReducer() -хук для керування більш складним станом, наприклад, щоб
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
