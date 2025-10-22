import { useEffect, useState } from "react";
import ItemList from "./ItemList";

// CLASE 3

// supongamos que no tenemos estos productos en local
const productos = [
  { id: 1, nombre: "Camiseta básica", precio: 12990 },
  { id: 2, nombre: "Pantalón de mezclilla", precio: 24990 },
  { id: 3, nombre: "Zapatillas urbanas", precio: 39990 },
  { id: 4, nombre: "Chaqueta impermeable", precio: 54990 },
  { id: 5, nombre: "Gorra deportiva", precio: 9990 },
  { id: 6, nombre: "Polerón con capucha", precio: 29990 },
  { id: 7, nombre: "Calcetines de algodón (pack x3)", precio: 6990 },
  { id: 8, nombre: "Cinturón de cuero", precio: 15990 },
  { id: 9, nombre: "Camisa formal", precio: 22990 },
  { id: 10, nombre: "Reloj analógico", precio: 64990 },
];

// SEPARAREMOS EN 2 TIPOS DE COMPONENTeS
//  COMPONENTES CONTENEDORES/STATEFULL
//  COMPONENTES DE VISTA

function ItemListContainer({}) {
  const [items, setItems] = useState([]);

  const obtenerProductos = () =>
    new Promise((resolve, reject) => {
      if (productos.length > 0) {
        setTimeout(() => {
          resolve(productos);
        }, 3000);
      } else {
        reject("No se encontraron productos");
      }
    });

  useEffect(() => {
    obtenerProductos().then((data) => setItems(data));
  }, []);

  return <ItemList items={items} />;
}

export default ItemListContainer;
