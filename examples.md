# Array destructure

```js
const state = useState("");

const value = state[0];
const setValue = state[1];
const arr = ["Andriy", 20, "dev"];

const [name, age, profession] = arr;
```

## Custom hooks

```jsx
import { useState } from "react";

export const useToggle = ({ initState = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(initState);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    handleToggle,
    handleOpen,
    handleClose,
  };
};
```

```jsx
import { useState } from "react";
import { Modal } from "./Modal";

export const ComponentB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal B</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          id.
        </h1>
        <button type="button" onClick={closeModal}>
          Close modal B
        </button>
      </Modal>
    </>
  );
};
```

```jsx
❌
const [state, setState] = useState({
  email: "",
  password: "",
});
```

```jsx
export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    e.target.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);

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
        Email:
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
```

### Lazy initializations

```js


  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);
  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);


Викликає один раз
    useState(() => {
      console.log("READ EMAIL");
      return JSON.parse(localStorage.getItem("email"));
    }) ?? "";

  const [password, setPassword] =
    useState(() => {
      console.log("READ PASSWORD");
      return JSON.parse(localStorage.getItem("password"));
    }) ?? "";


Викликає кожен раз


 const [password, setPassword] =
    useState( JSON.parse(localStorage.getItem("password"))) ??
```

**Reusable hook**

```jsx
const useLocalStorage = (key, initValue = "") => {
  const [state, setState] =
    useState(() => JSON.parse(localStorage.getItem(key))) ?? initValue;

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
```
