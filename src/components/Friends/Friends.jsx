import React, { useState, useMemo } from "react";
import initialData from "../../../friends";

export const Friends = () => {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(initialData);
  const [query, setQuery] = useState("");

  // const filteredFriends = useMemo(() => {
  //   console.log("RENDER" + Date.now());
  // }, [query, friends]);

  // IIFE (() => {})()

  // const filteredFriends = (() => {
  //   console.log("RENDER", new Date());
  //   return friends.filter(({ name }) => {
  //     return name.toLowerCase().includes(query);
  //   });
  // })();

  const filteredFriends = useMemo(() => {
    console.log("RENDER", new Date());
    return friends.filter(({ name }) => name.toLowerCase().includes(query));
  }, [query, friends]);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
      <br />

      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        value={query}
      />

      <br />
      <ul>
        {filteredFriends.map(({ id, name, phone }) => (
          <li key={id} style={{ marginBottom: "20px" }}>
            <p>{name}</p>
            <p>{phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
