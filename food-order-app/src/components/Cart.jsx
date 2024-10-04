import { useContext, useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { CartContext } from "../context/products-cart-context";
import Button from "./Button";

export default function Cart({ onClose }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { products } = useContext(CartContext);

  function handleStartCheckout() {
    setIsCheckingOut(true);
  }

  function handleSubmitOrder(values) {
    console.log(values);
  }

  function handleClose() {
    setIsCheckingOut(false);
    onClose();
  }

  let modalTitle = "Your Cart";

  if (isCheckingOut) {
    modalTitle = "Checkout";
  }

  return (
    <div className="cart">
      <h2>{modalTitle}</h2>
      {!isCheckingOut && (
        <CartItems>
          <div className="modal-actions">
            <Button
              caption="Close"
              className="text-button"
              onClick={handleClose}
            />
            <Button
              caption="Checkout"
              className="button"
              onClick={handleStartCheckout}
              disabled={products.length < 1}
            />
          </div>
        </CartItems>
      )}
      {isCheckingOut && (
        <Checkout onSubmit={handleSubmitOrder}>
          <div className="modal-actions">
            <Button
              type="button"
              caption="Close"
              className="text-button"
              onClick={handleClose}
            />
            <Button
              type="submit"
              caption="Submit Order"
              className="button"
              disabled={products.length < 1}
            />
          </div>
        </Checkout>
      )}
    </div>
  );
}
