import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModalTypes";

const customStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  url,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.modal_content}>
        <img src={url} alt={alt} className={css.modal_mage} />
        {alt && <p className={css.modal_alt}>{alt}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;
