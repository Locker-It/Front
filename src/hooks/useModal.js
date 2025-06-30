import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export function useModal() {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (modalData?.autoCloseAfter) {
      const timer = setTimeout(() => {
        if (modalData.onClose) modalData.onClose();
        setModalData(null);
        if (modalData.navigateTo) navigate(modalData.navigateTo);
      }, modalData.autoCloseAfter);

      return () => clearTimeout(timer);
    }
  }, [modalData, navigate]);

  const showModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return { modalData, showModal, closeModal };
}
