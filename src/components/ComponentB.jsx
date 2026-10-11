import { Modal } from "./Modal";
import { useToggleModal } from "./hooks/useToggleModal";

export const ComponentB = () => {
  const { isModalOpen, toggle } = useToggleModal(false);

  return (
    <>
      <button onClick={toggle}>Open modal B</button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggle}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, id.
          </h1>
          <button type="button" onClick={toggle}>
            Close modal B
          </button>
        </Modal>
      )}
    </>
  );
};
