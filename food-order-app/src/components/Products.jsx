import { memo, useContext } from "react";
import { BASE_API_URL } from "../util/CONSTANTS";
import { ProductContext } from "../context/products-context";

const Products = memo(function Products({ loadingText, fallbackText }) {
  const { products: meals, isLoading, error } = useContext(ProductContext);

  return (
    <ul id="meals">
      {isLoading && <p>{loadingText}</p>}
      {error && <p>{fallbackText}</p>}
      {meals.length > 0 &&
        !isLoading &&
        meals.map((meal) => (
          <li className="meal-item" key={meal.id}>
            <article>
              <img src={BASE_API_URL + `/${meal.image}`} alt={meal.name} />
              <div className="meal-item-description">
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p>{meal.description}</p>
              </div>
              <div className="meal-item-actions">
                <button className="button">Add To Cart</button>
              </div>
            </article>
          </li>
        ))}
    </ul>
  );
});

export default Products;
