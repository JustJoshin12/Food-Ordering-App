import Header from "../Header/Header.js";
import Meals from "../Meals/Meals.js";
import { CartContextProvider } from "../../store/CartContext.js";
import { UserProgressContextProvider } from "../../store/UserProgressContext.js";
import Cart from "../Cart/Cart.js";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
