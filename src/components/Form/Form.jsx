import { useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");
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
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        email:
        <input
          className={styles.input}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          className={styles.input}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Signup</button>
    </form>
  );
};
