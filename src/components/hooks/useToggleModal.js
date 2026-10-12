import { useState } from "react";

export const useToggle = (defaultState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultState);

  const toggle = () => {
    setIsModalOpen(prev => !prev);
  };

  return {
    isModalOpen,
    toggle,
  };
};
