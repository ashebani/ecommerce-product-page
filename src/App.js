import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setaCartItems] = useState({
    name: "",
    price: 125,
    quantity: 0,
  });
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    setaCartItems({ ...cartItems, quantity: cartItems.quantity + counter });
    setCounter(0);
  };
  return (
    <div className="grid max-w-5xl mx-auto">
      <Header
        setCartItems={setaCartItems}
        setShowCart={setShowCart}
        showCart={showCart}
        cartItems={cartItems}
      />
      <Main counter={counter} setCounter={setCounter} addToCart={addToCart} />
    </div>
  );
}

export default App;
