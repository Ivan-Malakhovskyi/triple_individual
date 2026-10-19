import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Count {counter}</p>

      <button type="button" onClick={() => setCounter(prev => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCounter(prev => prev - 1)}>
        Decrement
      </button>
    </div>
  );
};
