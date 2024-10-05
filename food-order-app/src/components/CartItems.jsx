import { currency } from "../util/formatter.js";

import Button from "./UI/Button.jsx";

export default function CartItems({ product, onPlus, onMinus }) {
  return (
    <li className="cart-item">
      <p>
        {`${product.name} - ${product.quantity} x ${currency.format(
          product.price
        )}`}
      </p>
      <div className="cart-item-actions">
        <Button onClick={onMinus}>-</Button>
        <p>{product.quantity}</p>
        <Button onClick={onPlus}>+</Button>
      </div>
    </li>
  );
}
