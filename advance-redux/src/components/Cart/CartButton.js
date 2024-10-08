import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartAmount = cartItems.reduce(
    (totalItems, cartItem) => totalItems + cartItem.quantity,
    0
  );
  const dispatch = useDispatch();
  const { toggleCart } = uiActions;

  function handleToggleCart() {
    dispatch(toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
