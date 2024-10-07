import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShowCounter = useSelector((state) => state.isShowCounter);
  const dispacth = useDispatch();
  const { increment, decrement, toggleCounter } = counterActions;

  function incrementHandler(increaseAmountBy) {
    dispacth(increment(increaseAmountBy));
  }

  function decrementHandler() {
    dispacth(decrement());
  }

  const toggleCounterHandler = () => {
    dispacth(toggleCounter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={() => incrementHandler(5)}>Increase By 5</button>
        <button onClick={() => incrementHandler(1)}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
