import React, { PropsWithChildren } from "react";
import { StyledModal, StyledModalShadow } from "./StyledModal";
import useModal from "../hooks/useModal";
import closeIcon from "../assets/close.svg";

interface ModalProps extends React.ComponentProps<"div"> {
  type: "default" | "minify";
}

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
          <img data-testid="modal-close-btn" src={closeIcon} onClick={closeModal} />
        </div>
      </StyledModal>
    </>
  );
}

export default Modal;
