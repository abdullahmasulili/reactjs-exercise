import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, {
    open() {
      dialogRef.showModal();
    },
    close() {
      dialogRef.close();
    },
  });

  return createPortal(
    <dialog className="modal">{children}</dialog>,
    document.querySelector("#modal")
  );
});

export default Modal;
