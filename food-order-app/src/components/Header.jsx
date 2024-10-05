import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import { CartContext } from "../context/products-cart-context";
import Button from "./UI/Button";

export default function Header({ onCartClick }) {
  const { products } = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="application logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={onCartClick}>
          Cart ({products.length})
        </Button>
      </nav>
    </header>
  );
}
