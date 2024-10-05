import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import { CartContext } from "../context/products-cart-context";
import Button from "./UI/Button";

export default function Header({ onCartClick }) {
  const { products } = useContext(CartContext);

  return (
    <header id="main-header">
      <h1 id="title">
        <img src={Logo} alt="application logo" />
        REACTFOOD
      </h1>
      <Button textOnly onClick={onCartClick}>
        Cart ({products.length})
      </Button>
    </header>
  );
}
