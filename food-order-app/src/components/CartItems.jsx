import { useContext } from "react";
import { currency } from "../util/currency.js";
import { CartContext } from "../context/products-cart-context.jsx";

export default function CartItems() {
  const { products, updateItemQuantity, cartTotal } = useContext(CartContext);

  return (
    <>
      <ul>
        {products.length < 1 && (
          <p>Nothing to show here. Add your desired meal first</p>
        )}
        {products.length > 0 &&
          products.map((product) => (
            <li key={product.id} className="cart-item">
              <p>
                {`${product.name} - ${product.quantity} x 
                ${currency.format(product.price)}`}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => updateItemQuantity(product, -1)}>
                  -
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => updateItemQuantity(product, 1)}>
                  +
                </button>
              </div>
            </li>
          ))}
      </ul>
      <p className="cart-total">{currency.format(cartTotal)}</p>
    </>
  );
}
