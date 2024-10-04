import { useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

export default function Cart({ onClose }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  function handleStartCheckout() {
    setIsCheckingOut(true);
  }

  function handleSubmitOrder() {
    console.log("Placing order, please wait...");
  }

  let modalTitle = "Your Cart";
  let mainActionButtonCaption = "Checkout";
  let mainActionButtonHandler = handleStartCheckout;

  if (isCheckingOut) {
    modalTitle = "Checkout";
    mainActionButtonCaption = "Submit Order";
    mainActionButtonHandler = handleSubmitOrder;
  }

  return (
    <div className="cart">
      <h2>{modalTitle}</h2>
      {!isCheckingOut && <CartItems />}
      {isCheckingOut && <Checkout />}
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={mainActionButtonHandler}>
          {mainActionButtonCaption}
        </button>
      </div>
    </div>
  );
}
