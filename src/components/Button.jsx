// function Button() {
//   return <button>click me</button>;
// }

// export default Button

const Button = ({ label, bgcolor }) => {
  // Button = (props) | props es un OBJETO, se debe desestructurar usando llaves
  // si uno pone {label}, al llamar el botón se debe usar el parámetro "label", es decir
  // nombres deben ser consistentes
  //   console.log(label);
  return (
    <button
      style={{ backgroundColor: bgcolor }}
      className="boton-1"
      onClick={() => alert("click!")}
    >
      {label}
    </button>
  );
};

export default Button;

// JSX -> JS y XML

// EXPORT SIN "default"
// export const Button = () => {
//   return <button>click me</button>;
// };
