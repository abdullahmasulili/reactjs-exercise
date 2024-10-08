import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../store/ui-slice";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const { toggleCart } = uiActions;

  function handleToggleCart() {
    dispatch(toggleCart());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleToggleCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
