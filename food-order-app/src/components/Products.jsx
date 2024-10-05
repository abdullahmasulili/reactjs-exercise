import { memo, useContext } from "react";
import { ProductContext } from "../context/products-context";
import { CartContext } from "../context/products-cart-context";

import ProductItem from "./ProductItem";
import Error from "./Error";

const Products = memo(function Products() {
  const { products: meals, isLoading, error } = useContext(ProductContext);
  const { addItemToCart } = useContext(CartContext);

  if (isLoading) {
    return (
      <p style={{ textAlign: "center" }}>Retrieving Meals, Please wait...</p>
    );
  }

  if (error) {
    return (
      <Error title="Failed to retrieve meals..." message={error.message} />
    );
  }

  return (
    <ul id="meals">
      {meals.length > 0 &&
        !isLoading &&
        meals.map((meal) => (
          <ProductItem key={meal.id} meal={meal} onAddToCart={addItemToCart} />
        ))}
    </ul>
  );
});

export default Products;
