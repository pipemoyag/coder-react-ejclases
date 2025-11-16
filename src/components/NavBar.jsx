import { Link } from "react-router";
import CartWidget from "./CartWidget";

function NavBar({ categories }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/coder-react-ejclases/">
          Ejemplo
        </Link>

        {/* ---- Carrito visible solo en MOBILE ---- */}
        <CartWidget className="d-lg-none me-2" />

        {/* Botón Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>

              <ul className="dropdown-menu">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      className="dropdown-item"
                      to={`/coder-react-ejclases/category/${category}`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* ---- Carrito visible solo en DESKTOP ---- */}
          <CartWidget className="d-none d-lg-flex ms-2" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
