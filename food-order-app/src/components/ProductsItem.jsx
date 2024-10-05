import { BASE_API_URL } from "../util/CONSTANTS";
import { currency } from "../util/currency";
import Button from "./Button";

export default function ProductsItem({ items: meals, onAddToCart }) {
  return meals.map((meal) => (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={BASE_API_URL + `/${meal.image}`} alt={meal.name} />
        <div className="meal-item-description">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currency.format(meal.price)}</p>
          <p>{meal.description}</p>
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
  ));
}
