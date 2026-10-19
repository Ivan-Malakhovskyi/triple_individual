import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    // e.target.reset();
  };
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;

      case "password":
        setPassword(value);
        return;

      default:
        return;
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ position: "relative" }}
    >
      <label>
        email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button style={{ position: "absolute" }} type="submit">
        Signup
      </button>
    </form>
  );
};
