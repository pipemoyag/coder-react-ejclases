function ItemDetail({ item }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src={item?.thumbnail}
              className="card-img-top"
              alt="Nombre del producto"
            />
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text text-muted mb-2">${item.price}</p>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary w-100">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
