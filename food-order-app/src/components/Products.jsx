import { memo, useContext } from "react";
import { ProductContext } from "../context/products-context";
import { CartContext } from "../context/products-cart-context";

import ProductItem from "./ProductItem";

const Products = memo(function Products({ loadingText, fallbackText }) {
  const { products: meals, isLoading, error } = useContext(ProductContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <ul id="meals">
      {isLoading && <p>{loadingText}</p>}
      {error && <p>{fallbackText}</p>}
      {meals.length > 0 &&
        !isLoading &&
        meals.map((meal) => (
          <ProductItem key={meal.id} meal={meal} onAddToCart={addItemToCart} />
        ))}
    </ul>
  );
});

export default Products;
