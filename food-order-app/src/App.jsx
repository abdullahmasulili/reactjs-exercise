import Header from "./components/Header";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";
import Cart from "./components/Cart";
import CartContextProvider from "./context/products-cart-context";
import UserProgressContextProvider from "./context/user-progress-context";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <ProductContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <Cart />
            <Checkout />
            <Header />
            <main>
              <Products />
            </main>
          </CartContextProvider>
        </UserProgressContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
