import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCartQuantity = () =>
    cart.reduce((quantity, product) => quantity + product.count, 0);

  const addToCart = (product) => setCart([...cart, product]);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ getCartQuantity, addToCart, cart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
