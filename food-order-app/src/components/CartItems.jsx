import { useContext } from "react";
import { currency } from "../util/formatter.js";
import { CartContext } from "../context/products-cart-context.jsx";
import Button from "./UI/Button.jsx";

export default function CartItems({ children }) {
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
                <Button
                  caption="-"
                  onClick={() => updateItemQuantity(product, -1)}
                />
                <p>{product.quantity}</p>
                <Button
                  caption="+"
                  onClick={() => updateItemQuantity(product, 1)}
                />
              </div>
            </li>
          ))}
      </ul>
      <p className="cart-total">{currency.format(cartTotal)}</p>
      {children}
    </>
  );
}
