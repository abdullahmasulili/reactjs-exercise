export default function Cart({ onClose, onCheckout }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
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
      <p className="cart-total">$99.00</p>
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
