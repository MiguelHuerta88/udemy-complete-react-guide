import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // context

  // state
  const [cartIsShown, setCartIsShown] = useState(false);

  // handlers
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
