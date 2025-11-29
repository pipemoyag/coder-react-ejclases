import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCart } from "../context/useCart";

function CartWidget({ className }) {
  const { getCartQuantity } = useCart();
  const quantity = getCartQuantity();
  return (
    <Link
      to="/coder-react-ejclases/cart"
      className={`btn btn-outline-primary d-flex align-items-center gap-2 ${className}`}
    >
      <i className="bi bi-cart-fill"></i>
      <span>{quantity}</span>
    </Link>
  );
}

export default CartWidget;
