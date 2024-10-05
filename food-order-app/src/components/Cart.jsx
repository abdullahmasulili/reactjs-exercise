import { useContext } from "react";

import { CartContext } from "../context/products-cart-context";
import { UserProgressContext } from "../context/user-progress-context";

import { currency } from "../util/formatter.js";

import CartItems from "./CartItems";
import Button from "./UI/Button";
import Modal from "./Modal";

export default function Cart() {
  const { products, updateItemQuantity, cartTotal } = useContext(CartContext);
  const {
    hideModal: hideCart,
    showCheckout,
    progress,
  } = useContext(UserProgressContext);

  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {products.length < 1 && (
          <p>Nothing to show here. Add your desired meal first</p>
        )}
        {products.length > 0 &&
          products.map((product) => (
            <CartItems
              key={product.id}
              product={product}
              onPlus={() => updateItemQuantity(product.id, 1)}
              onMinus={() => updateItemQuantity(product.id, -1)}
            />
          ))}
      </ul>
      <p className="cart-total">{currency.format(cartTotal)}</p>
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
