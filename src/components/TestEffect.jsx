import React, { useEffect, useState } from "react";

export const TestEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(count);
    // debugger;
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
      <br />
      <label>
        {" "}
        Test <input type="text" value={value} onChange={handleChange} />
      </label>
      <p>Count {count}</p>
    </div>
  );
};
