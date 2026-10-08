import React, { useReducer } from "react";

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
      throw new Error(`Unsupported action ${action.type}`);
  }
};

export const Counter = () => {
  //   const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  return (
    <div>
      <p>Count {state.count}</p>

      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 1,
          })
        }
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};
