import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: function () {},
  showCheckout: function () {},
  hideModal: function () {},
});

export default function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }

  function showCheckout() {
    setProgress("checkout");
  }

  function hideModal() {
    setProgress("");
  }

  const userProgress = {
    progress,
    showCart,
    showCheckout,
    hideModal,
  };

  return (
    <UserProgressContext.Provider value={userProgress}>
      {children}
    </UserProgressContext.Provider>
  );
}
