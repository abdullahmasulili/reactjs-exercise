import { useCallback, useRef, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";
import Cart from "./components/Cart";
import CartContextProvider from "./context/products-cart-context";

function App() {
  const modalRef = useRef();
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = useCallback(
    function handleOpenModal(modalType) {
      if (!activeModal) {
        modalRef.current.open();
      }

      setActiveModal(modalType);
    },
    [activeModal]
  );

  const handleCloseModal = useCallback(function handleCloseModal() {
    setActiveModal(null);
    modalRef.current.close();
  }, []);

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Modal ref={modalRef}>
            {activeModal === "cart" && <Cart onClose={handleCloseModal} />}
          </Modal>
        </CartContextProvider>
        <Header onCartClick={() => handleOpenModal("cart")} />
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
