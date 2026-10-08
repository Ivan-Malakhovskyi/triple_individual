import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal_root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      // isOpen &&
      createPortal(
        <div
          className={styles.modal_backdrop}
          onClick={this.handleBackDropClick}
        >
          <div className={styles.modal_content}>{this.props.children}</div>
        </div>,
        modalRoot,
      )
    );
  }
}

export default Modal;
