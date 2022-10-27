import React, { PropsWithChildren } from "react";
import { StyledModal, StyledModalShadow } from "./StyledModal";
import useModal from "../hooks/useModal";
import { Icon } from "semantic-ui-react";

type ModalProps = {
  type: "default" | "minify";
};

function Modal({ type, children }: PropsWithChildren<ModalProps>) {
  const { closeModal } = useModal();
  return (
    <>
      <StyledModalShadow data-testid="modal-shadow" aria-hidden="true" onClick={closeModal} />
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
          <Icon name="close" size="small" onClick={closeModal} />
        </div>
      </StyledModal>
    </>
  );
}

export default Modal;
