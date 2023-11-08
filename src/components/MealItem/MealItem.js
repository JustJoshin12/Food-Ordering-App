import "./MealItem.css";

const MealItem = ({ meal }) => {
  return (
    <li className="meal__item">
      <article className="meal__item-article">
        <img className="meal__item-image" src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal__item-price">{meal.price}</p>
          <p className="meal__item-description">{meal.description}</p>
        </div>
        <p className="meal__item-actions">
          <button className="meal__item-button"> Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
