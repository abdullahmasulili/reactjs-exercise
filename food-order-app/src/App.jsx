import { useCallback, useRef } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";

function App() {
  const cartRef = useRef();

  const handleOpenCart = useCallback(function handleOpenCart() {
    cartRef.current.open();
  }, []);

  return (
    <>
      <ProductContextProvider>
        <Modal ref={cartRef}>
          <div className="cart">
            <h2>Your Cart</h2>
          </div>
        </Modal>
        <Header onCartClick={handleOpenCart} />
        <main>
          <Products
            loadingText="Retrieving Meals, Please wait..."
            fallbackText="No Meals Can Be Displayed"
          />
        </main>
      </ProductContextProvider>
    </>
  );
}

export default App;
