import styles from "./InputRow.module.css";
import { useBill } from "../contexts/BillContext";

function InputRow({ lastElement, firstElement, product }) {
  const numberFormatter = new Intl.NumberFormat("en-US");
  const { productName, numProducts, price, id } = product;
  const { dispatch } = useBill();
  const totalPrice = Math.round(price * numProducts);

  return (
    <div
      className={`${styles.inputRow} ${
        lastElement === "true" ? styles.lastElement : ""
      }`}
    >
      <div
        className={`${styles.number} ${
          firstElement === "true" ? styles.roundFirst : ""
        } ${lastElement === "true" ? styles.roundLast : ""}`}
      >
        {id + 1}
      </div>
      <input
        className={styles.product}
        type="text"
        value={productName}
        onChange={(e) =>
          dispatch({
            type: "updateProductName",
            payload: { id, name: e.target.value },
          })
        }
      ></input>
      <input
        className={styles.numProduct}
        type="number"
        value={numProducts || ""}
        onChange={(e) =>
          dispatch({
            type: "updateNumber",
            payload: { id, number: Number(e.target.value) },
          })
        }
      ></input>
      <input
        className={styles.price}
        type="number"
        value={price || ""}
        onChange={(e) =>
          dispatch({
            type: "updatePrice",
            payload: { id, price: Number(e.target.value) },
          })
        }
      ></input>
      <p
        className={`${styles.totalPrice} ${
          firstElement === "true" ? styles.roundFirst : ""
        } ${lastElement === "true" ? styles.roundLast : ""}`}
      >
        {totalPrice ? numberFormatter.format(totalPrice) : ""}
      </p>
    </div>
  );
}

export default InputRow;
