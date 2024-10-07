import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShowCounter = useSelector((state) => state.isShowCounter);
  const dispacth = useDispatch();

  function incrementHandler(increaseAmountBy) {
    dispacth({
      type: "INCREMENT",
      payload: {
        amount: increaseAmountBy,
      },
    });
  }

  function decrementHandler() {
    dispacth({
      type: "DECREMENT",
    });
  }

  const toggleCounterHandler = () => {
    dispacth({
      type: "TOGGLE_COUNTER",
    });
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
