import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const cartAmount = useSelector((state) => state.cart.totalQuantity);
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
