/* eslint-disable react/prop-types */
import Modal from "react-modal";
import {
  CloseButton,
  FooterButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./CustomModal.styles";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title = "Modal",
  children,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={title}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
            padding: "20px",
            borderRadius: "10px",
            width: "90%",
            maxWidth: "500px",
            margin: "0 auto",
            backgroundColor: "#fff",
          },
        }}
        ariaHideApp={false}
      >
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <FooterButton onClick={onClose}>Fechar</FooterButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
