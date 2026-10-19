import { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export const Counter = () => {
  // const [counter, setCounter] = useState(0);

  function init(initialState) {
    return { ...initialState, count: initialState.count + 10 };
  }

  const [state, dispatch] = useReducer(
    countReducer,
    {
      count: 0,
      isLoading: false,
    },
    init,
  );

  return (
    <div>
      <p>Count {state.count}</p>

      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};
