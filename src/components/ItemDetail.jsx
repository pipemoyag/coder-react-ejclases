import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Columna izquierda: imagen */}
        <div className="col-md-5 text-center">
          <img
            src={item?.thumbnail}
            alt={item.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Columna derecha: info */}
        <div className="col-md-7">
          <h2 className="fw-bold mb-3 fs-3">{item.title}</h2>
          <p className="text-muted mb-4">{item.description}</p>
          <h4 className="text-primary mb-4">${item.price}</h4>

          {/* Contador simple */}
          <ItemCount item={item}></ItemCount>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
