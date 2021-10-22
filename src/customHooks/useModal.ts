import { useCallback, useState } from 'react';

const useModal = (initialMode = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialMode);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  return [isModalOpen, openModal, closeModal] as const;
};

export default useModal;
