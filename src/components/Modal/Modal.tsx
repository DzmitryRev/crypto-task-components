import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledModal, StyledModalShadow } from './StyledModal';
import closeIcon from '../../assets/close.svg';
import { defaultTheme, openedModalTheme } from '../../styles/theme';

interface ModalProps extends React.ComponentProps<'div'> {
  type: 'regular' | 'minified';
  closeModalExtraCallback?: () => void;
}

function Modal({ type, closeModalExtraCallback, children }: PropsWithChildren<ModalProps>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    return () => {
      closeModal();
    };
  }, []);

  return (
    <ThemeProvider theme={isModalOpen ? openedModalTheme : defaultTheme}>
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
        <div
          className="close-button"
          role="button"
          tabIndex={0}
          onClick={closeModal}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeModal();
            }
          }}
        >
          <img data-testid="modal-close-btn" src={closeIcon} alt="close modal" />
        </div>
      </StyledModal>
    </ThemeProvider>
  );
}

Modal.defaultProps = {
  closeModalExtraCallback: () => {},
};

export default Modal;
