import React, { Component } from "react";

const initItems = [
  { id: crypto.randomUUID(), text: "task1", completed: false },
  { id: crypto.randomUUID(), text: "task2", completed: false },
  { id: crypto.randomUUID(), text: "task3", completed: false },
  { id: crypto.randomUUID(), text: "task4", completed: false },
  { id: crypto.randomUUID(), text: "task5", completed: false },
  { id: crypto.randomUUID(), text: "task6", completed: true },
];

export class App extends Component {
  constructor(props) {
    super(props);

    const data = localStorage.getItem("user-data");
    console.log("🚀 ~ App ~ constructor ~ data:", data);

    this.state = {
      userData: data
        ? JSON.parse(data)
        : {
            name: "",
            email: "",
          },
      count: 0,
      items: initItems,
    };
  }

  // state = {
  //   userData: {
  //     name: "",
  //     email: "",
  //   },
  //   count: 0,
  //   items: initItems,
  // };

  componentDidMount() {
    // const data = localStorage.getItem("user-data");

    // if (data !== null) {
    //   this.setState({ userData: JSON.parse(data) });
    // }

    console.log("COMPONENT WAS RENDER");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.userData === this.state.userData);

    if (prevState.userData !== this.state.userData) {
      console.log("OLD STATE", prevState);
      console.log("CURRENT", this.state.userData);
      localStorage.setItem("user-data", JSON.stringify(this.state.userData));
    }
  }

  componentWillUnmount() {
    console.log("COMPONENT WAS DELETED");
  }

  incrementCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;

    this.setState({
      userData: {
        name,
        email,
      },
    });

    e.target.reset();
  };

  handleDelete = id => {
    this.setState(prev => ({
      items: prev.items.filter(item => item.id !== id),
    }));
  };

  render() {
    const { items, userData } = this.state;

    return (
      <div>
        <h1>Життєвий цикл компонента</h1>

        <p>Name {userData.name}</p>
        <p>Email {userData.email}</p>

        <p>Поточний лічильник: {this.state.count}</p>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input name="name" type="text" />
            </label>
            <label>
              email:
              <input name="email" type="email" />
            </label>

            <button type="submit">Create</button>
          </form>
        </div>

        <button onClick={this.incrementCount}>Збільшити лічильник</button>

        <br />

        <ul>
          {items.map(({ id, text, completed }) => (
            <li key={id}>
              <p>{text}</p>
              <p>{completed ? "Active" : "Non-active"}</p>
              <button type="button" onClick={() => this.handleDelete(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
