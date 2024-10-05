import { BASE_API_URL } from "../util/CONSTANTS";
import { currency } from "../util/formatter";
import Button from "./UI/Button";

export default function ProductItem({ meal, onAddToCart }) {
  return (
    <li className="meal-item">
      <article>
        <img src={BASE_API_URL + `/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currency.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button
            caption="Add To Cart"
            className="button"
            onClick={() => onAddToCart(meal, 1)}
          />
        </div>
      </article>
    </li>
  );
}
