import { currency } from "../util/currency.js";

export default function CartItems() {
  return (
    <>
      <ul>
        <li className="cart-item">
          <p>Lorem Ipsum</p>
          <div className="cart-item-actions">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </li>
      </ul>
      <p className="cart-total">{currency.format(99)}</p>
    </>
  );
}
