import Header from "./components/Header";
import Products from "./components/Products";
import ProductContextProvider from "./context/products-context";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Header />
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
