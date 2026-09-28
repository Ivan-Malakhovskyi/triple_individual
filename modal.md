- create Modal.jsx + add styles
- add life-cycle methods
- Stacking content - якщо буде overflow-hidden - вона буде обрубана по розміру
  батька

  Методи вирішення:
  - z-index: 9999 !BAD
  - portal ✅

Це той випадок, коли ми пишемо html руками:

1. Create dom node

```html
<div id="modal-root"></div>
```

2. import {createPortal} from 'react-dom'

3. Return call createPortal(html, link on the dom node)

```jsx
  render() {
    return createPortal(
      <div className={styles.modal_backdrop}>
        <div className={styles.modal_content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
```

Висновки

- рішення stacking context
- компонент все ще рендериться в App
- візуально в html він стоїть поряд з root

4. Close modal with escape

```jsx

  componentDidMount() {
      console.log("component was render");
      window.addEventListener("keydown", e => {
          console.log(e.code);
      })
  }


     if (e.code === "Escape") {
        console.log("NEED TO CLOSE");
      }

        if (e.code === "Escape") {
        console.log("NEED TO CLOSE");
            this.props.onClose()
      }

```

5.

- ПОКАЗАТИ, ЩО window не працює?

- Проблема з Esc

- Показати як впаде вкладка без winndow.removeEventListener

- Показати монтування і розмонтування

- ПОтрібно передату посилання на функцію яка показує модальне вікно

```jsx
  componentDidMount() {
    console.log("component was render");
    console.log(this.props);

    window.addEventListener("keydown", this.handleEscClick);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    window.removeEventListener("keydown", this.handleEscClick);
  }

  handleEscClick = e => {
    if (e.code === "Escape") {
      console.log("NEED TO CLOSE");
      this.props.onClose();
    }
  };
```

6. Закриття через backdarop

```jsx
handleBackDropClick = e => {
  console.log("Click to backdrop");
};
```

- клікаємо в бекдроп ✅
- клікаємо в контент ❌

- event bublling

- МИ ловимо подію на backdrop

```jsx
console.log(e.currentTarget);
console.log(e.target);
```

7. Clock

```jsx
import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log("Interval");
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
```
