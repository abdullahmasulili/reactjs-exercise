import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function ({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="text-end">
        <Button customClass="text-stone-400 hover:text-stone-600">
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
