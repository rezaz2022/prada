import styles from "./HeadLine.module.css";

function HeadLine() {
  return (
    <div className={styles.headLine}>
      <div className={styles.headLineRow}>ردیف</div>
      <div className={styles.product}>محصول</div>
      <div className={styles.numProduct}>تعداد</div>

      <div className={styles.price}>قیمت</div>
      <div className={styles.totalPrice}>مجموع</div>
    </div>
  );
}

export default HeadLine;
