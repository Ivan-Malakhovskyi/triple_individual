import { Component, useState } from "react";

//closures

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

export class FormOld extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = e => {
    e.preventDefault();

    e.target.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        style={{ position: "relative" }}
      >
        <label>
          email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button style={{ position: "absolute" }} type="submit">
          Signup
        </button>
      </form>
    );
  }
}
