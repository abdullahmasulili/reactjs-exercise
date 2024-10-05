import { memo, useContext } from "react";
import { ProductContext } from "../context/products-context";
import { CartContext } from "../context/products-cart-context";

import ProductsItem from "./ProductsItem";

const Products = memo(function Products({ loadingText, fallbackText }) {
  const { products: meals, isLoading, error } = useContext(ProductContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <ul id="meals">
      {isLoading && <p>{loadingText}</p>}
      {error && <p>{fallbackText}</p>}
      {meals.length > 0 && !isLoading && (
        <ProductsItem items={meals} onAddToCart={addItemToCart} />
      )}
    </ul>
  );
});

export default Products;
