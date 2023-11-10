import Header from "../Header/Header.js";
import Meals from "../Meals/Meals.js";
import { CartContextProvider } from "../../store/CartContext.js";
import { UserProgressContextProvider } from "../../store/UserProgressContext.js";
import Cart from "../Cart/Cart.js";
import Checkout from "../Checkout/Checkout.js";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
