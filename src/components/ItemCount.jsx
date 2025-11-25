import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

// POR AHORA ES SOLO 1 COMPONENTE. SI MAS ADELANTE EL CONTADOR SE CONECTA AL CONTEXTO DEL CARRITO O
// A UNA BASE DE DATOS, Y SE TENGAN QUE HACER VALIDACIONES, SE SEPARARA USANDO ItemCountContainer

function ItemCount({ item }) {
  const stock = item?.stock;
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);

  const agregar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const quitar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, count: counter });
    toast("se agrego el producto al carrito");
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
      <button className="btn btn-primary px-3 py-2" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
