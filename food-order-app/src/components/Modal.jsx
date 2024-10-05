import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, className, open }) {
  const dialogRef = useRef();
  const cssClasses = `modal ${className}`;

  useEffect(() => {
    const modal = dialogRef.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={cssClasses} ref={dialogRef}>
      {children}
    </dialog>,
    document.querySelector("#modal")
  );
}
