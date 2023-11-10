import "./MealItem.css";
import Button from "../UI/Button";
import currencyFormatter from "../../utils/formatting";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal__item">
      <article className="meal__item-article">
        <img
          className="meal__item-image"
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3 className="meal__item-title">{meal.name}</h3>
          <p className="meal__item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal__item-description">{meal.description}</p>
        </div>
        <p className="meal__item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
