import { currency } from "../util/formatter.js";

export default function CartItems({ name, price, quantity, onPlus, onMinus }) {
  return (
    <li className="cart-item">
      <p>{`${name} - ${quantity} x ${currency.format(price)}`}</p>
      <div className="cart-item-actions">
        <button onClick={onMinus}>-</button>
        <p>{quantity}</p>
        <button onClick={onPlus}>+</button>
      </div>
    </li>
  );
}
