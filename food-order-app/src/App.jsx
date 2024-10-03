import { fetchMeals } from "./api/products";
import Header from "./components/Header";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";

function App() {
  const { fetchedData: meals, isLoading, error } = useFetch(fetchMeals, []);

  return (
    <>
      <Header />
      <main>
        <Products
          data={meals}
          isLoading={isLoading}
          fallbackText={error?.message}
        />
      </main>
    </>
  );
}

export default App;
