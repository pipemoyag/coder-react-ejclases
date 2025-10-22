import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import ItemListContainer from "./components/ItemListContainer";

// #### CLASE 3 ####
// Repaso promesas
// const miPromesa = (a) =>
//   new Promise((resolve, reject) => {
//     if (a) {
//       resolve("ok");
//     } else {
//       reject("falto el parametro");
//     }
//   });

// //then y catch
// miPromesa(5)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function App() {
  return (
    <>
      <ItemListContainer />
    </>
  );
}

// #### EJ 2.4 ####
// function App() {
//   const [time1, setTime1] = useState(0);
//   const [time2, setTime2] = useState(0);

//   useEffect(() => {
//     // ❌ Este usa "time1 + 1" y se congela
//     const id1 = setInterval(() => {
//       setTime1(time1 + 1); // time1 está "cerrado" en 0
//     }, 1000);

//     // ✅ Este usa la versión funcional y funciona bien
//     const id2 = setInterval(() => {
//       setTime2((prev) => prev + 1); // usa el valor actual
//     }, 1000);

//     return () => {
//       clearInterval(id1);
//       clearInterval(id2);
//     };
//   }, []); // 👈 el arreglo vacío hace que use el valor inicial de "time1"

//   return (
//     <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
//       <h2>Comparación entre las dos formas</h2>
//       <p>
//         ❌ Usando <code>setTime(time + 1)</code>: {time1}
//       </p>
//       <p>
//         ✅ Usando <code>{"setTime(prev => prev + 1)"}</code>: {time2}
//       </p>
//     </div>
//   );
// }

//  #### CLASE 2 ####
// function App() {
//   return (
//     <>
//       {/* <Button label={"click me"} />
//       <Button label={"login"} bgcolor={"blue"}></Button>
//       <Button label={"logout"} bgcolor={"green"}></Button>
//       <Button label={"report"} bgcolor={"red"}></Button>
//       <input type="text" /> */}
//       <Counter />
//     </>
//   );
// }

// function App() {
//   // siempre nombre de variable va acompañado de su "seter"=> usuario, setUsuario; que es una funcion de actualizacion
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <section className="container">
//         <h1>Contador {count}</h1>
//         <button onClick={handleClick}>+</button>
//       </section>
//     </>
//   );
// }

// function App() {
//   // 🔹 Estados
//   const [nombre, setNombre] = useState(""); // Guarda el texto que escribe el usuario
//   const [contador, setContador] = useState(0); // Cuenta cuántas veces escribió algo
//   const [mensaje, setMensaje] = useState("📝 Escribe tu nombre para comenzar"); // Muestra mensajes dinámicos o de validación

//   // 🔹 Función que se ejecuta cada vez que el usuario escribe
//   const handleChange = (event) => {
//     const nuevoTexto = event.target.value;

//     // 1️⃣ Validación: no permitir más de 15 caracteres
//     if (nuevoTexto.length > 15) {
//       setMensaje("⚠️ El nombre no puede tener más de 15 caracteres");
//       return;
//     }

//     // 2️⃣ Actualizamos el estado con el nuevo texto (sin espacios al inicio)
//     setNombre(nuevoTexto.trimStart());

//     // 3️⃣ Aumentamos el contador
//     setContador(contador + 1);

//     // 4️⃣ Mostramos un mensaje según la longitud del texto
//     if (nuevoTexto === "") {
//       setMensaje("📝 Escribe tu nombre para comenzar");
//     } else if (nuevoTexto.length <= 5) {
//       setMensaje("✍️ Nombre corto, pero válido");
//     } else {
//       setMensaje("✅ ¡Buen nombre!");
//     }
//   };

//   // 🔹 Nueva función: limpia los estados (cuando se presiona el botón)
//   const handleClear = () => {
//     setNombre("");
//     setContador(0);
//     setMensaje("🧹 Campos reiniciados. 📝 Escribe tu nombre para comenzar");
//   };

//   // 🔹 Lo que se muestra en pantalla
//   return (
//     <div
//       style={{
//         padding: "1.5rem",
//         fontFamily: "Arial, sans-serif",
//         maxWidth: "400px",
//         margin: "2rem auto",
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center" }}>
//         Ejemplo con useState, handleChange y onClick
//       </h2>

//       <input
//         type="text"
//         value={nombre}
//         onChange={handleChange}
//         placeholder="Escribe tu nombre"
//         style={{
//           width: "100%",
//           padding: "0.5rem",
//           fontSize: "1rem",
//           marginBottom: "1rem",
//         }}
//       />

//       <button
//         onClick={handleClear}
//         style={{
//           padding: "0.5rem 1rem",
//           fontSize: "1rem",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "1rem",
//         }}
//       >
//         Limpiar
//       </button>

//       <p>
//         <strong>Texto actual:</strong> {nombre || "— vacío —"}
//       </p>
//       <p>
//         <strong>Teclas presionadas:</strong> {contador}
//       </p>
//       <p style={{ color: "#333", fontStyle: "italic" }}>{mensaje}</p>
//     </div>
//   );
// }

export default App;
