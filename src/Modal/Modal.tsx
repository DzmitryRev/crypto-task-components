import React, { PropsWithChildren } from "react";
import { StyledModal, StyledModalShadow } from "./StyledModal";
import useModal from "../hooks/useModal";
// import {C} from "@mui/material"

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
          {/* <ClearIcon
            data-testid="modal-close-btn"
            fontSize="large"
            color="inherit"
            onClick={closeModal}
          /> */}
          <div onClick={closeModal}>Close</div>
        </div>
      </StyledModal>
    </>
  );
}

export default Modal;
