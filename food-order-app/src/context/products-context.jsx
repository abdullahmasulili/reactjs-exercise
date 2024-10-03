import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { fetchMeals } from "../api/products";

export const ProductContext = createContext({
  products: [],
});

export default function ProductContextProvider({ children }) {
  const { fetchedData: meals, isLoading, error } = useFetch(fetchMeals, []);

  const contextValue = {
    products: meals,
    isLoading,
    error,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
