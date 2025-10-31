import { useEffect, useState } from "react";
import ItemList from "./ItemList";

// CLASE 3

// supongamos que no tenemos estos productos en local
const productos = [
  {
    id: 1,
    name: "Rascador modular",
    description:
      "Rascador de varios niveles con plataforma y cuerda de sisal, ideal para mantener las uñas sanas.",
    imageUrl: "https://picsum.photos/seed/rascador/400/300",
    price: 34990,
  },
  {
    id: 2,
    name: "Cama donut",
    description:
      "Cama circular y acolchada que proporciona calor y confort para siestas largas.",
    imageUrl: "https://picsum.photos/seed/camadonut/400/300",
    price: 19990,
  },
  {
    id: 3,
    name: "Arenero tapado",
    description:
      "Arenero con tapa antiolor y puerta abatible para mayor higiene y privacidad.",
    imageUrl: "https://picsum.photos/seed/arenero/400/300",
    price: 25990,
  },
  {
    id: 4,
    name: "Comedero automático",
    description:
      "Dispensador programable de porciones para alimentar a tu mascota mientras no estás.",
    imageUrl: "https://picsum.photos/seed/comedero/400/300",
    price: 45990,
  },
  {
    id: 5,
    name: "Fuente de agua",
    description:
      "Fuente con filtro que mantiene el agua en movimiento y favorece la hidratación.",
    imageUrl: "https://picsum.photos/seed/fuente/400/300",
    price: 29990,
  },
  {
    id: 6,
    name: "Juguete interactivo",
    description:
      "Juguete con movimiento aleatorio para estimular la caza y el ejercicio diario.",
    imageUrl: "https://picsum.photos/seed/juguete/400/300",
    price: 15990,
  },
  {
    id: 7,
    name: "Collar antipulgas",
    description:
      "Collar de larga duración que protege contra pulgas y garrapatas.",
    imageUrl: "https://picsum.photos/seed/collar/400/300",
    price: 9990,
  },
  {
    id: 8,
    name: "Cepillo autolimpiante",
    description:
      "Cepillo ergonómico que recoge el pelo muerto y se limpia con un botón.",
    imageUrl: "https://picsum.photos/seed/cepillo/400/300",
    price: 12990,
  },
  {
    id: 9,
    name: "Transportín plegable",
    description:
      "Transportín ligero y plegable, fácil de guardar y cómodo para viajes cortos.",
    imageUrl: "https://picsum.photos/seed/transportin/400/300",
    price: 38990,
  },
  {
    id: 10,
    name: "Alfombra antideslizante",
    description:
      "Alfombra para comederos que evita derrames y mantiene el área limpia.",
    imageUrl: "https://picsum.photos/seed/alfombra/400/300",
    price: 8990,
  },
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
