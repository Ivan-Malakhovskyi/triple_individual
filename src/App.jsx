import React, { Component } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import Clock from "./components/Clock";

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
    // console.log("🚀 ~ App ~ constructor ~ data:", data);

    this.state = {
      userData: data
        ? JSON.parse(data)
        : {
            name: "",
            email: "",
          },
      count: 0,
      items: initItems,
      isOpen: false,
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
    // console.log("COMPONENT WAS RENDER");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.userData === this.state.userData);

    if (prevState.userData !== this.state.userData) {
      // console.log("OLD STATE", prevState);
      // console.log("CURRENT", this.state.userData);
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

  handleToggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { items, userData, isOpen } = this.state;

    return (
      <section>
        <h1>Життєвий цикл компонента</h1>

        <button type="button" onClick={this.handleToggle}>
          toggle clock
        </button>

        {isOpen && <Clock />}

        {/* <button type="button" onClick={this.handleToggle}>
          Open modal
        </button>

        {isOpen && (
          <Modal onClose={this.handleToggle}>
            <h1>Modal title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              tempora.
            </p>
            <button type="button" onClick={this.handleToggle}>
              Close modal
            </button>
          </Modal>
        )} */}

        <p>Name {userData.name}</p>
        <p>Email {userData.email}</p>

        <p>Поточний лічильник: {this.state.count}</p>

        <Form handleSubmit={this.handleSubmit} />

        <button onClick={this.incrementCount}>Збільшити лічильник</button>

        <br />

        <TaskList handleDelete={this.handleDelete} items={items} />
      </section>
    );
  }
}
