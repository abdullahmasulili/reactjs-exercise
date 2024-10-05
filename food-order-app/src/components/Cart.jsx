import { useContext, useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { CartContext } from "../context/products-cart-context";
import Button from "./UI/Button";
import { addOrder } from "../api/products";

export default function Cart({ onClose }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { products } = useContext(CartContext);

  function handleStartCheckout() {
    setIsCheckingOut(true);
  }

  async function handleSubmitOrder(values) {
    const order = {
      ...values,
      items: products,
    };

    try {
      await addOrder(order);
    } catch (error) {
      console.log(error.message);
    }
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
        <>
          <CartItems />
          <div className="modal-actions">
            <Button textOnly onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={handleStartCheckout}
              disabled={products.length < 1}
            >
              Checkout
            </Button>
          </div>
        </>
      )}
      {isCheckingOut && (
        <Checkout onSubmit={handleSubmitOrder}>
          <div className="modal-actions">
            <Button type="button" textOnly onClick={handleClose}>
              Close
            </Button>
            <Button type="submit">Submit Order</Button>
          </div>
        </Checkout>
      )}
    </div>
  );
}
