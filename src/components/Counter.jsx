// HOOKS, funciones que provee REACT
import { useState } from "react";

const Counter = () => {
  // cont [state, setState] = useState(iniState)
  const [counter, setCounter] = useState(0);

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
