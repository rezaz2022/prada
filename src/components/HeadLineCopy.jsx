import styles from "./HeadLine.module.css";

function HeadLineCopy() {
  return (
    <div className={styles.headLine}>
      <input className={styles.headLineRow} value="empty"></input>
      <input className={styles.product} value="empty"></input>
      <input className={styles.numProduct} value="empty"></input>

      <input className={styles.price} value="empty"></input>
      <input className={styles.totalPrice} value="empty"></input>
    </div>
  );
}

export default HeadLineCopy;
