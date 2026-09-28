import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal_root");

export class Modal extends Component {
  componentDidMount() {
    console.log("component was render");
    console.log(this.props);

    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === "Escape") {
      console.log("NEED TO CLOSE");
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    console.log("Click to backdrop");
    console.log(e.currentTarget);
    console.log(e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.modal_backdrop} onClick={this.handleBackDropClick}>
        <div className={styles.modal_content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
