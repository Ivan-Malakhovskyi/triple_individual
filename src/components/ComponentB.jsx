import { useState } from "react";
import { Modal } from "./Modal";

export const ComponentB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal B</button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, id.
          </h1>
          <button type="button" onClick={closeModal}>
            Close modal B
          </button>
        </Modal>
      )}
    </>
  );
};
