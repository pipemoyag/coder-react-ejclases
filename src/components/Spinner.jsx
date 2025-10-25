const Spinner = ({ loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-2 mb-2">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Spinner;
