import styles from "../style/Item.module.css";

function Item({ item }) {
  return (
    <div className="col">
      <div className="card text-center h-100 d-flex flex-column justify-content-center align-items-center">
        <img src={item.thumbnail} className="card-img-top" alt="Producto"></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="fw-bold">${item.price}</p>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
