import { Component } from "react";

export class Form extends Component {
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
