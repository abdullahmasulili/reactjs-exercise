import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartAmount = cartItems.reduce(
    (totalItems, cartItem) => totalItems + cartItem.quantity,
    0
  );

  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
