import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching",
        message: "Fetching Cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/cart.json`
      );

      if (!response.ok) {
        throw new Error("Failed to send data...");
      }

      const resData = await response.json();

      return resData;
    };

    try {
      const cartData = await sendRequest();

      dispatch(cartActions.setCartData(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An Error Occured!",
          message: "Failed to send cart data",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cartData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data...");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An Error Occured!",
          message: "Failed to send cart data",
        })
      );
    }
  };
};
