import {
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from '../../styles/components/Modal.style';
import { IModal } from '../../types/interfaces/modal.interface';
import ReactPortal from '../ReactPortal';

const Modal = ({ title, children, isOpen, handleClose }: IModal) => {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal">
      <ModalWrapper onClick={handleClose}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalCloseButton onClick={() => handleClose()} />
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalWrapper>
    </ReactPortal>
  );
};

export default Modal;
