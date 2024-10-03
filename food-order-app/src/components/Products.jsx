import { memo } from "react";
import { BASE_API_URL } from "../util/CONSTANTS";

const Products = memo(function Products({
  data,
  isLoading,
  fallbackText,
  loadingText,
}) {
  console.log(data);

  return (
    <ul id="meals">
      {isLoading && <p>{loadingText}</p>}
      {fallbackText && <p>{fallbackText}</p>}
      {data.length > 0 &&
        !isLoading &&
        data.map((meal) => (
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
