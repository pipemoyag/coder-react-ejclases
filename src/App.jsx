import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // 🔹 Estados
  const [nombre, setNombre] = useState(""); // Guarda el texto que escribe el usuario
  const [contador, setContador] = useState(0); // Cuenta cuántas veces escribió algo
  const [mensaje, setMensaje] = useState("📝 Escribe tu nombre para comenzar"); // Muestra mensajes dinámicos o de validación

  // 🔹 Función que se ejecuta cada vez que el usuario escribe
  const handleChange = (event) => {
    const nuevoTexto = event.target.value;

    // 1️⃣ Validación: no permitir más de 15 caracteres
    if (nuevoTexto.length > 15) {
      setMensaje("⚠️ El nombre no puede tener más de 15 caracteres");
      return;
    }

    // 2️⃣ Actualizamos el estado con el nuevo texto (sin espacios al inicio)
    setNombre(nuevoTexto.trimStart());

    // 3️⃣ Aumentamos el contador
    setContador(contador + 1);

    // 4️⃣ Mostramos un mensaje según la longitud del texto
    if (nuevoTexto === "") {
      setMensaje("📝 Escribe tu nombre para comenzar");
    } else if (nuevoTexto.length <= 5) {
      setMensaje("✍️ Nombre corto, pero válido");
    } else {
      setMensaje("✅ ¡Buen nombre!");
    }
  };

  // 🔹 Nueva función: limpia los estados (cuando se presiona el botón)
  const handleClear = () => {
    setNombre("");
    setContador(0);
    setMensaje("🧹 Campos reiniciados. 📝 Escribe tu nombre para comenzar");
  };

  // 🔹 Lo que se muestra en pantalla
  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "2rem auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Ejemplo con useState, handleChange y onClick
      </h2>

      <input
        type="text"
        value={nombre}
        onChange={handleChange}
        placeholder="Escribe tu nombre"
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      />

      <button
        onClick={handleClear}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Limpiar
      </button>

      <p>
        <strong>Texto actual:</strong> {nombre || "— vacío —"}
      </p>
      <p>
        <strong>Teclas presionadas:</strong> {contador}
      </p>
      <p style={{ color: "#333", fontStyle: "italic" }}>{mensaje}</p>
    </div>
  );
}

export default App;
