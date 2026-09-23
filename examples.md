```jsx
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email:  "",
    };
  }


  componentDidMount() {
    const data = localStorage.getItem("user-data");

    if (data !== null) {
      console.log("🚀 ~ UserForm ~ componentDidMount ~ data:", data);
    }
  }


    handleSubmit = e => {
    // const { name, value } = e.target;
    e.preventDefault();
    const form = e.currentTarget;

    const username = form.elements.username.value;
    const email = form.elements.email.value;
    this.setState({ username, email });

    e.target.reset();

    // this.setState({ [name]: value });
  };


    componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      localStorage.setItem("username", this.state.username);
    }

    if (prevState.email !== this.state.email) {
      localStorage.setItem("email", this.state.email);
    }
  }

          <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            User Name
            <input
              type="text"
              name="username"
              // value={username}
              // onChange={this.handleChange}
            />
          </label>
          <br />

          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              // value={email}
              // onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add user</button>
        </form>


```

### ComponentDidUpdate

OR ✅

```jsx
 constructor(props) {
    super(props);
    const data = localStorage.getItem("user-data");

    this.state = {
      items: initItems,
      userData: data
        ? JSON.parse(data)
        : {
            username: "",
            email: "",
          },
      active: false,
    };
  }
```

```jsx
const initItems = [
  { id: crypto.randomUUID(), text: "task1", completed: false },
  { id: crypto.randomUUID(), text: "task2", completed: false },
  { id: crypto.randomUUID(), text: "task3", completed: false },
  { id: crypto.randomUUID(), text: "task4", completed: false },
  { id: crypto.randomUUID(), text: "task5", completed: false },
  { id: crypto.randomUUID(), text: "task6", completed: true },
];

this.state = {
  items: initItems,
  userData: {
    username: "",
    email: "",
  },
  active: false,
};




  componentDidMount() {
    const data = localStorage.getItem("user-data");

    if (data !== null) {
      this.setState({ userData: JSON.parse(data) });
      console.log("🚀 ~ UserForm ~ componentDidMount ~ data:", data);
    }
  }


    componentDidUpdate(prevProps, prevState) {
    console.log(prevState.userData);
    console.log(this.state.userData === prevState.userData);
    // debugger;

    // if (prevState.username !== this.state.username) {
    //   localStorage.setItem("username", this.state.username);
    // }

    // if (prevState.email !== this.state.email) {
    //   localStorage.setItem("email", this.state.email);
    // }

    if (prevState.userData !== this.state.userData) {
      localStorage.setItem("user-data", JSON.stringify(this.state.userData));
    }
  }

handleChange = e => {
  const { name, value } = e.target;

  this.setState(prev => ({ userData: { ...prev.userData, [name]: value } }));
};

handleDelete = id => {
  this.setState(prev => ({
    items: prev.items.filter(item => item.id !== id),
  }));
};

<ul>
  {items.map(item => (
    <li key={item.id}>
      <p>{item.text}</p>
      <button type="button" onClick={() => this.handleDelete(item.id)}>
        Delete
      </button>
    </li>
  ))}
</ul>;
```

```jsx
import { Component } from "react";

const initItems = [
  { id: crypto.randomUUID(), text: "task1", completed: false },
  { id: crypto.randomUUID(), text: "task2", completed: false },
  { id: crypto.randomUUID(), text: "task3", completed: false },
  { id: crypto.randomUUID(), text: "task4", completed: false },
  { id: crypto.randomUUID(), text: "task5", completed: false },
  { id: crypto.randomUUID(), text: "task6", completed: true },
];

export class UserForm extends Component {
  constructor(props) {
    super(props);
    const data = localStorage.getItem("user-data");

    this.state = {
      items: initItems,
      userData: data
        ? JSON.parse(data)
        : {
            username: "",
            email: "",
          },
      active: false,
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prev => ({ userData: { ...prev.userData, [name]: value } }));
  };

  // componentDidMount() {
  //   const data = localStorage.getItem("user-data");

  //   if (data !== null) {
  //     this.setState({ userData: JSON.parse(data) });
  //     console.log("🚀 ~ UserForm ~ componentDidMount ~ data:", data);
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.userData);
    console.log(this.state.userData === prevState.userData);
    // debugger;

    // if (prevState.username !== this.state.username) {
    //   localStorage.setItem("username", this.state.username);
    // }

    // if (prevState.email !== this.state.email) {
    //   localStorage.setItem("email", this.state.email);
    // }

    if (prevState.userData !== this.state.userData) {
      localStorage.setItem("user-data", JSON.stringify(this.state.userData));
    }
  }

  handleDelete = id => {
    this.setState(prev => ({
      items: prev.items.filter(item => item.id !== id),
    }));
  };

  render() {
    const { active, items } = this.state;
    const { username, email } = this.state.userData;

    return (
      <div>
        <h2>User Form</h2>

        {/* <form onSubmit={this.handleSubmit}> */}
        <label htmlFor="">
          User Name
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        {/* <button type="submit">Add user</button> */}
        {/* </form> */}

        <br />

        <ul>
          {items.map(item => (
            <li key={item.id}>
              <p>{item.text}</p>
              <button type="button" onClick={() => this.handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div>
          <h2>Data</h2>
          <p>UserName: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}
```

```jsx
class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",

      email: "",
    };
  }

  // Оновлення стану при зміні вмісту полів вводу

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { username, email } = this.state;

    return (
      <div>
        <h1>Форма введення користувача</h1>

        <form>
          <label>
            Ім'я користувача:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <div>
          <h2>Введені дані:</h2>

          <p>Ім'я користувача: {username}</p>

          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}

export default UserForm;
```
