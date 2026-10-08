import { Component } from "react";
import { Modal } from "./Modal";

export class ComponentA extends Component {
  state = {
    isModalOpen: false,
  };

  //  openModal = () => setIsModalOpen(true);

  //  closeModal = () => setIsModalOpen(false);

  toggle = () => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <button onClick={this.toggle}>Open modal A</button>
        {isModalOpen && (
          <Modal onClose={this.toggle}>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, id.
            </h1>
            <button type="button" onClick={this.toggle}>
              Close modal A
            </button>
          </Modal>
        )}
      </>
    );
  }
}
