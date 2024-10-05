import { currency } from "../util/formatter.js";

export default function CartItems({ product, onPlus, onMinus }) {
  return (
    <li className="cart-item">
      <p>
        {`${product.name} - ${product.quantity} x ${currency.format(
          product.price
        )}`}
      </p>
      <div className="cart-item-actions">
        <button onClick={onMinus}>-</button>
        <p>{product.quantity}</p>
        <button onClick={onPlus}>+</button>
      </div>
    </li>
  );
}
