import { useBill } from "../contexts/BillContext";
import styles from "./TotalBill.module.css";

function TotalBill() {
  const { state } = useBill();
  const numberFormatter = new Intl.NumberFormat("en-US");
  const totalBill = calTotalBill(state.products);
  function calTotalBill(products) {
    return products.reduce((acc, product) => {
      if (product.price && product.numProducts) {
        return acc + product.price * product.numProducts;
      }
      return acc;
    }, 0);
  }

  return (
    <p className={styles.totalBill}>
      {totalBill === 0 ? "" : numberFormatter.format(totalBill)}
      :جمع کل
    </p>
  );
}

export default TotalBill;
