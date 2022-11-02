import React, { PropsWithChildren, useEffect } from 'react';
import { StyledModal, StyledModalShadow } from './StyledModal';
import closeIcon from '../../assets/close.svg';

interface ModalProps extends React.ComponentProps<'div'> {
  type: 'regular' | 'minified';
  closeModalExtraCallback?: () => void;
}

function Modal({ type, closeModalExtraCallback, children }: PropsWithChildren<ModalProps>) {
  const closeModal = () => {
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      closeModal();
    };
  }, []);

  return (
    <>
      <StyledModalShadow
        data-testid="modal-shadow"
        aria-hidden="true"
        onClick={() => {
          if (closeModalExtraCallback) {
            closeModalExtraCallback();
          }
          closeModal();
        }}
      />
      <StyledModal
        data-testid="modal"
        aria-hidden="true"
        type={type}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <div className="close-button">
          <img
            data-testid="modal-close-btn"
            src={closeIcon}
            onClick={closeModal}
            alt="close modal"
          />
        </div>
      </StyledModal>
    </>
  );
}

Modal.defaultProps = {
  closeModalExtraCallback: () => {},
};

export default Modal;
