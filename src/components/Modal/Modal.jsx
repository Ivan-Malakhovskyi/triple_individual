import { Component, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal_root");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      // console.log("Я викликаюсь перед видаленням компонента");
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    // isOpen &&
    createPortal(
      <div className={styles.modal_backdrop} onClick={handleBackDropClick}>
        <div className={styles.modal_content}>{children}</div>
      </div>,
      modalRoot,
    )
  );
};

class ModalOld extends Component {
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

export default ModalOld;
