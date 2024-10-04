import { useCallback, useRef } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";
import Cart from "./components/Cart";
import CartContextProvider from "./context/products-cart-context";

function App() {
  const cartRef = useRef();

  const handleOpenCart = useCallback(function handleOpenCart() {
    cartRef.current.open();
  }, []);

  const handleCloseCart = useCallback(function handleCloseCart() {
    cartRef.current.close();
  }, []);

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Modal ref={cartRef}>
            <Cart onClose={handleCloseCart} />
          </Modal>
        </CartContextProvider>
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
