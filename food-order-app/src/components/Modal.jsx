import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, className, open }) {
  const dialogRef = useRef();
  const cssClasses = `modal ${className}`;

  useEffect(() => {
    if (open) {
      return dialogRef.current.showModal();
    }

    return dialogRef.current.close();
  }, [open]);

  return createPortal(
    <dialog className={cssClasses} ref={dialogRef}>
      {children}
    </dialog>,
    document.querySelector("#modal")
  );
}
