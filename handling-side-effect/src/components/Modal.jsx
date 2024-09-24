import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      return dialogRef.current.showModal();
    }

    dialogRef.current.close();
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
