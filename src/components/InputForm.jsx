import InputRow from "./InputRow";
import { useBill } from "../contexts/BillContext";
function InputForm() {
  const { state } = useBill();
  return (
    // <div className={styles.form}>
    //   </div>
    <>
      {state.products.map((product, i) => (
        <InputRow
          key={i}
          firstElement={i === 0 ? "true" : null}
          lastElement={i === state.products.length - 1 ? "true" : null}
          index={i}
          product={product}
        />
      ))}
    </>
  );
}

export default InputForm;
