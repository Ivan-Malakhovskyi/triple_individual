import { useState } from "react";

export const useToggleModal = (defaultState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultState);

  const toggle = () => {
    setIsModalOpen(prev => !prev);
  };

  return {
    isModalOpen,
    toggle,
  };
};
