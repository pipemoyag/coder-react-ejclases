import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

// POR AHORA ES SOLO 1 COMPONENTE. SI MAS ADELANTE EL CONTADOR SE CONECTA AL CONTEXTO DEL CARRITO O
// A UNA BASE DE DATOS, Y SE TENGAN QUE HACER VALIDACIONES, SE SEPARARA USANDO ItemCountContainer

function ItemCount({ item }) {
  const { addToCart, cart } = useContext(CartContext);
  const quantityInCart = cart.find((p) => p.id === item.id)?.count ?? 0;

  const maxAvailable = item.stock - quantityInCart;

  const [counter, setCounter] = useState(1);

  const agregar = () => {
    if (counter < maxAvailable) {
      setCounter(counter + 1);
    }
  };

  const quitar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, counter);
    toast("Se agregó el producto al carrito");
  };

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-outline-secondary" onClick={quitar}>
          -
        </button>
        <span className="mx-3 fs-5">{counter}</span>
        <button className="btn btn-outline-secondary" onClick={agregar}>
          +
        </button>
      </div>

      <button
        className="btn btn-primary px-3 py-2"
        onClick={handleAddToCart}
        disabled={maxAvailable <= 0}
      >
        Agregar al carrito
      </button>

      {maxAvailable <= 0 && (
        <p className="text-danger mt-2">No queda stock disponible.</p>
      )}
    </>
  );
}

export default ItemCount;
