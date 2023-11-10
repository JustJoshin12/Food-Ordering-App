import "./Cart.css";
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "../CartItem/CartItem.js";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext.js";
import UserProgressContext from "../../store/UserProgressContext.js";
import currencyFormatter from "../../utils/formatting.js";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  };

  function handleGoToCheckout(){
    userProgressCtx.showCheckout();
  };

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2 className="cart__title">Your Cart</h2>
      <ul className="cart__list">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart__total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to checkout</Button>
        )}
        
      </p>
    </Modal>
  );
};

export default Cart;
