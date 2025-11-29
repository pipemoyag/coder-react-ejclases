import { Link } from "react-router";
import { useCart } from "../context/useCart";

const CartContainer = () => {
  const { cart, clearCart, getTotal } = useCart();

  const total = getTotal();
  return (
    <div className="container my-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      <div className="row">
        {/* LISTA DE PRODUCTOS */}
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <div className="alert alert-info text-center">
              Tu carrito está vacío 😿
            </div>
          ) : (
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  {/* Imagen */}
                  <img
                    src={item.thumbnail}
                    className="img-thumbnail"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    alt={item.name}
                  />

                  {/* Info */}
                  <div className="flex-grow-1 mx-3">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted">
                      Precio: ${item.price.toLocaleString("es-CL")}
                    </p>

                    <small>Cantidad: {item.count}</small>
                  </div>

                  {/* Subtotal */}
                  <strong className="mx-3">
                    ${(item.price * item.count).toLocaleString("es-CL")}
                  </strong>

                  {/* Botón eliminar */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    // onClick={() => removeItem(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RESUMEN */}
        {cart.length > 0 && (
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Resumen</h4>
                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span>Total:</span>
                  <strong>${total.toLocaleString("es-CL")}</strong>
                </div>

                <Link
                  className="btn btn-primary w-100 mb-2"
                  to={"/coder-react-ejclases/checkout"}
                >
                  Checkout
                </Link>

                <button
                  className="btn btn-outline-danger w-100"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
