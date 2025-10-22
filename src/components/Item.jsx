import styles from "../style/Item.module.css";

function Item({ item }) {
  return <p className={styles.fondoRojo}>{item.nombre}</p>;
}

export default Item;
