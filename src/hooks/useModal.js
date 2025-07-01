import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export function useModal() {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (modalData?.autoCloseAfter) {
      const timer = setTimeout(() => {
        setModalData(null);

        setTimeout(() => {
          if (modalData.onClose) modalData.onClose();
          if (modalData.navigateTo) navigate(modalData.navigateTo);
        }, 300);
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
