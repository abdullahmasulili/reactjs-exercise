import { useContext } from "react";

import { CartContext } from "../context/products-cart-context";
import { UserProgressContext } from "../context/user-progress-context";

import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  const { products } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const totalCartIitems = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="application logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCart}>
          Cart ({totalCartIitems})
        </Button>
      </nav>
    </header>
  );
}
