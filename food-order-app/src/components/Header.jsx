import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import { CartContext } from "../context/products-cart-context";

export default function Header({ onCartClick }) {
  const { products } = useContext(CartContext);

  return (
    <header id="main-header">
      <h1 id="title">
        <img src={Logo} alt="application logo" />
        REACTFOOD
      </h1>
      <button className="text-button" onClick={onCartClick}>
        Cart ({products.length})
      </button>
    </header>
  );
}
