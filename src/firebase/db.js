import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app); // => una instancia de mi db

export const getProducts = async (setItems) => {
  // querySnapshot viene de que es una "captura" de nuestra coleccion
  const querySnapshot = await getDocs(collection(db, "items")); // el segundo parametro es nombre de coleccion

  const products = [];
  // este forEach es especial
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id }); // agregamos id aparte, ya que no viene con .data()
  });
  setItems(products);
  return products;
};

export const getCategories = async () => {
  // querySnapshot viene de que es una "captura" de nuestra coleccion
  const querySnapshot = await getDocs(collection(db, "categories")); // el segundo parametro es nombre de coleccion

  const categories = [];
  // este forEach es especial
  querySnapshot.forEach((doc) => {
    categories.push(doc.data().name); // agregamos id aparte, ya que no viene con .data()
  });

  return categories;
};

export const getProductByCategory = async (category, setItems) => {
  const q = query(collection(db, "items"), where("category", "==", category));

  const querySnapshot = await getDocs(q);
  const products = [];
  // este forEach es especial
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id }); // agregamos id aparte, ya que no viene con .data()
  });

  setItems(products);
  return products;
};

export const getProduct = async (id, setItem) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  // .exists() es un método de firebase
  if (docSnap.exists()) {
    setItem({ ...docSnap.data(), id: docSnap.id });
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
