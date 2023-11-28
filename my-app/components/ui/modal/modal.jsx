import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./modalContent/modalContent";

const Modal = ({ setShowModal, showModal }) => {
  useEffect(() => {
    const showModal = localStorage.getItem("show-modal");

    if (!showModal) {
      setShowModal(true);
      localStorage.setItem("show-modal", true);
    }
  }, []);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button> */}
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            setShowModal={setShowModal}
          />,
          document.body
        )}
    </>
  );
};

export default Modal;
