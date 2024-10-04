import { useCallback, useRef } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";
import Cart from "./components/Cart";
import CartContextProvider from "./context/products-cart-context";

function App() {
  const modalRef = useRef();

  const handleOpenModal = useCallback(function handleOpenModal() {
    modalRef.current.open();
  }, []);

  const handleCloseModal = useCallback(function handleCloseModal() {
    modalRef.current.close();
  }, []);

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Modal ref={modalRef}>
            <Cart onClose={handleCloseModal} />
          </Modal>
          <Header onCartClick={handleOpenModal} />
          <main>
            <Products
              loadingText="Retrieving Meals, Please wait..."
              fallbackText="No Meals Can Be Displayed"
            />
          </main>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
