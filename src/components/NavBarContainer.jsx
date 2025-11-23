import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getCategories } from "../firebase/db";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products/category-list")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
    getCategories().then((cats) => setCategories(cats));
  }, []);

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
