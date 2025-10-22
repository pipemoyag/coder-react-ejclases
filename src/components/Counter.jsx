// HOOKS, funciones que provee REACT
import { useState, useEffect } from "react";

const Counter = () => {
  // cont [state, setState] = useState(iniState)
  const [counter, setCounter] = useState(0);

  // CLASE 3
  useEffect(() => {
    console.log("Counter se montó");

    return () => {
      // funcion de limpieza
      console.log("se desmontó");
    };
  }, [counter]); // [] => array de dependencias
  // [] (array vacío) => se va a ejecutar el efecto SOLO en el montaje
  // [a] => se va a ejecutar el efecto en el montaje y cuando se actualice

  const handleSub = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleSub}>restar</button>
      <button onClick={handleAdd}>sumar</button>
      {/* también se puede dejar la funcion definica dentro del onclick, directamente */}
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        resetear
      </button>
    </div>
  );
};

export default Counter;
