import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../firebase/db";

function ItemDetailContainer() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getProduct(id, setItem);
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setItem(data));
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
