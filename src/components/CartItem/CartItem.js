import "./CartItem.css";
import currencyFormatter from "../../utils/formatting";

const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <div className="cart-item-actions">
        <button className="cart-item-actions-button" onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button className="cart-item-actions-button" onClick={onIncrease}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
