import { useContext } from "react";

import { CartContext } from "../context/products-cart-context";
import { UserProgressContext } from "../context/user-progress-context";

import CartItems from "./CartItems";
import Button from "./UI/Button";
import Modal from "./Modal";

export default function Cart() {
  const { products } = useContext(CartContext);
  const {
    hideModal: hideCart,
    showCheckout,
    progress,
  } = useContext(UserProgressContext);

  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <CartItems />
      <div className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={showCheckout} disabled={products.length < 1}>
          Checkout
        </Button>
      </div>
    </Modal>
  );
}
