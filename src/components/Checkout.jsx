import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/useCart";
import { createOrder } from "../firebase/db";

const Checkout = () => {
  const { getTotalPrice, cart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir comportamiento por defecto, para que no se recargue la página

    const form = e.target;
    const email = form.email.value;
    const nombre = form.nombre.value;
    const celular = form.celular.value;

    const order = {
      buyer: { email, nombre, celular },
      total: getTotalPrice(),
      items: cart,
      date: serverTimestamp(),
    };

    createOrder(order);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        className="border rounded p-4 shadow w-100"
        style={{ maxWidth: "450px" }}
      >
        <h4 className="mb-4 text-center">
          Para finalizar tu compra, necesitamos los siguientes datos:
        </h4>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Juan Pérez"
              required
            />
          </div>

          {/* Celular */}
          <div className="mb-4">
            <label htmlFor="celular" className="form-label">
              Celular
            </label>
            <input
              type="tel"
              className="form-control"
              id="celular"
              placeholder="123456789"
              required
            />
          </div>

          {/* Botón */}
          <button type="submit" className="btn btn-primary w-100">
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
