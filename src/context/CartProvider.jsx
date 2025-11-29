import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const id = product.id;

      if (prevCart[id]) {
        return {
          ...prevCart,
          [id]: {
            ...prevCart[id],
            count: prevCart[id].count + quantity,
          },
        };
      }

      return {
        ...prevCart,
        [id]: {
          ...product,
          count: quantity,
        },
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updated = { ...prevCart };
      delete updated[id];
      return updated;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...prevCart[id],
        count: quantity,
      },
    }));
  };

  const clearCart = () => setCart({});

  // convertimos el objeto en array para mapearlo en componentes
  const cartArray = Object.values(cart);

  const getCartQuantity = () =>
    cartArray.reduce((acc, item) => acc + item.count, 0);

  const getTotalPrice = () =>
    cartArray.reduce((acc, item) => acc + item.price * item.count, 0);

  const value = {
    cart: cartArray,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
