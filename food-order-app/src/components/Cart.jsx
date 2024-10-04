import { useContext, useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { CartContext } from "../context/products-cart-context";

export default function Cart({ onClose }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { products } = useContext(CartContext);

  function handleStartCheckout() {
    setIsCheckingOut(true);
  }

  function handleSubmitOrder() {
    console.log("Placing order, please wait...");
  }

  function handleClose() {
    setIsCheckingOut(false);
    onClose();
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
        <button className="text-button" onClick={handleClose}>
          Close
        </button>
        <button
          className="button"
          onClick={mainActionButtonHandler}
          disabled={products.length < 1}
        >
          {mainActionButtonCaption}
        </button>
      </div>
    </div>
  );
}
