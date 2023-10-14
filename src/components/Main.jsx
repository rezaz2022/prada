import HeadLine from "./HeadLine";

import styles from "./Main.module.css";
import InputForm from "./InputForm";
import TotalBill from "./TotalBill";

function Main() {
  return (
    <main className={styles.main}>
      <HeadLine />

      <InputForm />
      <TotalBill />
    </main>
  );
}

export default Main;
