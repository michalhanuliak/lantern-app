import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = (e?: React.MouseEvent) => {
    if (!e || e.currentTarget === e.target) {
      setIsModalOpen(false);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return { isModalOpen, handleModalClose, handleModalOpen };
};

export default useModal;
