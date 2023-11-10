import "./Header.css";
import logoImg from "../../images/logo.jpg";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";


const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

 return (
    <header className="header">
        <div className="header__section">
            <img className="header__section-image" src={logoImg} alt="A restaurant" />
            <h1 className="header__section-title"> ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
 )
}

export default Header